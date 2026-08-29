import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import glsl from "vite-plugin-glsl";
import path from "path";

const rootDir = import.meta.dirname;

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  base: "/dl-model/",
  plugins: [preact(), glsl()],
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "./src"),
      data: path.resolve(rootDir, "./src/data"),
      hook: path.resolve(rootDir, "./src/SceneController/hook"),
      components: path.resolve(rootDir, "./src/SceneController/components"),
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
  },
  server: {
    port: 3000,
    fs: { allow: ["."] },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: id => (id.includes("three") ? "three" : undefined),
        chunkFileNames: "assets/f_[hash]-[name].js",
        assetFileNames: "assets/f_[hash]-[name][extname]",
      },
    },
  },
  oxc: {
    define: {
      this: "window",
    },
  },
});
