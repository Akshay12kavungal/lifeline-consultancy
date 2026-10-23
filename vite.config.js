import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: false },
  // Output to build/ (same as Create React App) so existing hosting settings keep working
  build: { outDir: "build" },
});
