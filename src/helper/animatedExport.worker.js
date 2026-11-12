import { encode as makeApng } from "upng-js";
import { makeAnimatedWebp } from "./makeAnimatedWebp";

self.onmessage = async ({ data }) => {
  try {
    const { type, frames, width, height, delay } = data;
    let blob;
    if (type === "apng") {
      const encoded = makeApng(
        frames,
        width,
        height,
        0,
        Array(frames.length).fill(delay),
      );
      blob = new Blob([encoded], { type: "image/apng" });
    } else if (type === "webp") {
      blob = await makeAnimatedWebp(frames, width, height, delay);
    } else {
      throw new Error(`Unknown animated image format: ${type}`);
    }
    self.postMessage({ blob });
  } catch (error) {
    self.postMessage({
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
