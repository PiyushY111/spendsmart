// frontend-vite/vite.config.js (Verify the content is EXACTLY this)

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // <-- This export structure is vital
  plugins: [react()],
  server: {
    // CRITICAL: The proxy configuration block
    proxy: {
      "/api": {
        target: "http://localhost:8080", // <-- Updated to port 8080
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
