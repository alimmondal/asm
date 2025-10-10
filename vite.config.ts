import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      src: path.resolve(__dirname, "./src"), // optional if you prefer "src/..."
    },
  },
  server: {
    proxy: {
      "/api/translate": {
        target: "https://translate.astian.org",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/translate/, "/translate"),
      },
    },
  },
  optimizeDeps: {
    include: ["react-pdf","pdfjs-dist/build/pdf.worker.min"],
  },
  build: {
    chunkSizeWarningLimit: 5000, // Increase the limit to 1000 kB
  },
});
