import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(),
],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:1111',
        changeOrigin: true,
      }
    }
  }
});
