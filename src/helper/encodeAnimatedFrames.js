export function encodeAnimatedFrames(type, frames, width, height, delay) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(
      new URL("./animatedExport.worker.js", import.meta.url),
      { type: "module" },
    );

    const cleanup = () => {
      worker.terminate();
    };

    worker.onmessage = ({ data }) => {
      cleanup();
      if (data.error) {
        reject(new Error(data.error));
      } else {
        resolve(data.blob);
      }
    };
    worker.onerror = event => {
      cleanup();
      reject(event.error ?? new Error(event.message));
    };
    worker.onmessageerror = () => {
      cleanup();
      reject(new Error("Could not read the animated export worker response."));
    };

    try {
      worker.postMessage(
        { type, frames, width, height, delay },
        frames,
      );
    } catch (error) {
      cleanup();
      reject(error);
    }
  });
}
