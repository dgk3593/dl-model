import { encode as encodeWebp } from "@jsquash/webp";

const textEncoder = new TextEncoder();

function readFourCC(bytes, offset) {
  return String.fromCharCode(...bytes.subarray(offset, offset + 4));
}

function writeUint24(view, offset, value) {
  view.setUint8(offset, value & 0xff);
  view.setUint8(offset + 1, (value >> 8) & 0xff);
  view.setUint8(offset + 2, (value >> 16) & 0xff);
}

function makeChunk(name, data) {
  const paddedLength = data.length + (data.length & 1);
  const chunk = new Uint8Array(8 + paddedLength);
  chunk.set(textEncoder.encode(name), 0);
  new DataView(chunk.buffer).setUint32(4, data.length, true);
  chunk.set(data, 8);
  return chunk;
}

function concatenate(parts) {
  const result = new Uint8Array(
    parts.reduce((total, part) => total + part.length, 0)
  );
  let offset = 0;
  for (const part of parts) {
    result.set(part, offset);
    offset += part.length;
  }
  return result;
}

function getImageChunks(webpBytes) {
  if (
    readFourCC(webpBytes, 0) !== "RIFF" ||
    readFourCC(webpBytes, 8) !== "WEBP"
  ) {
    throw new Error("This browser could not encode frames as WebP.");
  }

  const chunks = [];
  let hasAlpha = false;
  let offset = 12;
  while (offset + 8 <= webpBytes.length) {
    const name = readFourCC(webpBytes, offset);
    const length = new DataView(
      webpBytes.buffer,
      webpBytes.byteOffset + offset + 4,
      4
    ).getUint32(0, true);
    const dataStart = offset + 8;
    const dataEnd = dataStart + length;
    if (dataEnd > webpBytes.length) {
      throw new Error("The browser returned an invalid WebP frame.");
    }

    if (name === "ALPH") {
      hasAlpha = true;
    } else if (name === "VP8L" && length >= 5) {
      hasAlpha ||= (webpBytes[dataStart + 4] & 0x10) !== 0;
    }

    if (name !== "VP8X") {
      chunks.push(webpBytes.slice(offset, dataEnd + (length & 1)));
    }
    offset = dataEnd + (length & 1);
  }

  if (!chunks.some(chunk => ["VP8 ", "VP8L"].includes(readFourCC(chunk, 0)))) {
    throw new Error("The browser returned a WebP frame without image data.");
  }
  return { data: concatenate(chunks), hasAlpha };
}

async function encodeFrame(frame, width, height) {
  const pixels = new Uint8ClampedArray(frame);
  if (pixels.length !== width * height * 4) {
    throw new Error("An animation frame has an unexpected pixel size.");
  }
  const encoded = await encodeWebp(new ImageData(pixels, width, height), {
    lossless: 1,
    exact: 1,
  });
  return getImageChunks(new Uint8Array(encoded));
}

/**
 * Encode raw RGBA frames as an animated WebP.
 * @param {ArrayBuffer[]} frames
 * @param {number} width
 * @param {number} height
 * @param {number} delay Frame duration in milliseconds
 * @returns {Promise<Blob>}
 */
export async function makeAnimatedWebp(frames, width, height, delay) {
  if (
    !frames?.length ||
    !Number.isInteger(width) ||
    !Number.isInteger(height) ||
    width < 1 ||
    height < 1 ||
    !Number.isInteger(delay) ||
    delay < 1
  ) {
    throw new Error("Invalid animated WebP frame settings.");
  }

  const frameChunks = [];
  for (const frame of frames) {
    frameChunks.push(await encodeFrame(frame, width, height));
  }

  const vp8xData = new Uint8Array(10);
  vp8xData[0] = 0x02 | (frameChunks.some(frame => frame.hasAlpha) ? 0x10 : 0);
  const vp8xView = new DataView(vp8xData.buffer);
  writeUint24(vp8xView, 4, width - 1);
  writeUint24(vp8xView, 7, height - 1);

  const animationData = new Uint8Array(6);
  const frameParts = frameChunks.map(({ data: imageData }) => {
    const frameData = new Uint8Array(16 + imageData.length);
    const view = new DataView(frameData.buffer);
    writeUint24(view, 6, width - 1);
    writeUint24(view, 9, height - 1);
    writeUint24(view, 12, delay);
    frameData[15] = 2;
    frameData.set(imageData, 16);
    return makeChunk("ANMF", frameData);
  });

  const chunks = [
    makeChunk("VP8X", vp8xData),
    makeChunk("ANIM", animationData),
    ...frameParts,
  ];
  const body = concatenate([
    textEncoder.encode("WEBP"),
    ...chunks,
  ]);
  const riffHeader = new Uint8Array(8);
  riffHeader.set(textEncoder.encode("RIFF"), 0);
  new DataView(riffHeader.buffer).setUint32(4, body.length, true);

  return new Blob([riffHeader, body], { type: "image/webp" });
}
