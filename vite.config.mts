import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Relative asset paths keep the build portable across GitHub Pages and the custom domain.
  base: "",
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
  },
  preview: {
    port: 4173,
  },
  build: {
    outDir: "build",
    sourcemap: false,
  },
});
