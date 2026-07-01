class AutoWorker extends Worker {
  [Symbol.dispose]() {
    this.terminate();
    console.debug("Web Worker thread securely disposed by engine scope.");
  }
}

export class GIF {
  constructor(options = {}) {
    this.options = {
      workers: 2,
      quality: 10,
      repeat: 0,
      background: "#fff",
      width: window.innerWidth,
      height: window.innerHeight,
      transparent: null,
      workerScript: "gif.worker.js",
      ...options,
    };

    this.frames = [];
    this.eventListeners = new Map();
  }

  on(event, callback) {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, new Set());
    }
    this.eventListeners.get(event).add(callback);
  }

  emit(event, ...args) {
    this.eventListeners.get(event)?.forEach(callback => callback(...args));
  }

  addFrame(image, options = {}) {
    const frame = {
      delay: options.delay ?? 500,
      transparent: options.transparent ?? this.options.transparent,
      data: null,
    };

    if (image instanceof CanvasRenderingContext2D) {
      frame.data = image.getImageData(
        0,
        0,
        this.options.width,
        this.options.height,
      ).data;
    } else if (
      image instanceof HTMLCanvasElement ||
      image instanceof HTMLImageElement ||
      image instanceof Image
    ) {
      frame.data = this._getImageData(image);
    } else if (image instanceof Uint8ClampedArray) {
      frame.data = image;
    } else {
      throw new Error("Invalid frame source type.");
    }

    this.frames.push(frame);
  }

  _getImageData(image) {
    this.canvas ??= document.createElement("canvas");
    this.canvas.width = this.options.width;
    this.canvas.height = this.options.height;

    this.ctx ??= this.canvas.getContext("2d", { willReadFrequently: true });

    // Clear the canvas to be completely transparent before drawing the frame
    this.ctx.clearRect(0, 0, this.options.width, this.options.height);

    if (this.options.background && this.options.transparent === null) {
      this.ctx.fillStyle = this.options.background;
      this.ctx.fillRect(0, 0, this.options.width, this.options.height);
    }

    this.ctx.drawImage(image, 0, 0);

    return this.ctx.getImageData(0, 0, this.options.width, this.options.height)
      .data;
  }

  async render() {
    if (this.frames.length === 0) {
      throw new Error("No frames found to render.");
    }

    const totalFrames = this.frames.length;
    const finishedFrames = new Array(totalFrames);
    let framesDispatched = 0;
    let framesCompleted = 0;

    const activeWorkers = new Set();
    const freeWorkers = new Set();

    const terminatePool = () => {
      for (const worker of [...freeWorkers, ...activeWorkers]) {
        worker.terminate();
      }
      freeWorkers.clear();
      activeWorkers.clear();
    };

    for (let i = 0; i < Math.min(this.options.workers, totalFrames); i++) {
      freeWorkers.add(new Worker(this.options.workerScript));
    }

    return new Promise((resolve, reject) => {
      const processNext = () => {
        if (framesCompleted === totalFrames) {
          const buffers = finishedFrames.map(
            frame => new Uint8Array(frame.data),
          );
          const blob = new Blob(buffers, { type: "image/gif" });

          this.emit("finished", blob);
          terminatePool();
          resolve(blob);
          return;
        }

        while (freeWorkers.size > 0 && framesDispatched < totalFrames) {
          const worker = [...freeWorkers][0];
          freeWorkers.delete(worker);
          activeWorkers.add(worker);

          const frameIndex = framesDispatched++;
          const frame = this.frames[frameIndex];

          worker.onmessage = e => {
            activeWorkers.delete(worker);
            freeWorkers.add(worker);

            finishedFrames[frameIndex] = e.data;
            framesCompleted++;

            this.emit("progress", framesCompleted / totalFrames);
            processNext();
          };

          worker.onerror = err => {
            terminatePool();
            reject(err);
          };

          const task = {
            index: frameIndex,
            last: frameIndex === totalFrames - 1,
            delay: frame.delay,
            transparent: frame.transparent,
            width: this.options.width,
            height: this.options.height,
            quality: this.options.quality,
            repeat: this.options.repeat,
            dither: this.options.dither ?? false, // Added back
            globalPalette: this.options.globalPalette ?? false, // Added back
            data: frame.data,
          };

          worker.postMessage(task, [task.data.buffer]);
        }
      };

      processNext();
    });
  }
}
