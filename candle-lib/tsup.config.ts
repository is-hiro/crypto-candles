import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  outDir: "dist",
  dts: true,
  sourcemap: true,
  format: ["esm", "cjs"],
  clean: true,
  minify: true,
  target: "es6",
  external: ["react", "react-dom"],
  injectStyle: true,
});
