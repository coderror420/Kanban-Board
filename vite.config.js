/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // ✅ make sure this line exists
import path from "path";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
