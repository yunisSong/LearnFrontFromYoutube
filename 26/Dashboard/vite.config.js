import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
      {
        find: "components",
        replacement: resolve(__dirname, "src/components"),
      },
      {
        find: "apis",
        replacement: resolve(__dirname, "src/apis"),
      },
      {
        find: "views",
        replacement: resolve(__dirname, "src/views"),
      },
      {
        find: "routes",
        replacement: resolve(__dirname, "src/router"),
      },
      {
        find: "store",
        replacement: resolve(__dirname, "src/store"),
      },
      {
        find: "utils",
        replacement: resolve(__dirname, "src/utils"),
      },
      {
        find: "assets",
        replacement: resolve(__dirname, "src/assets"),
      },
    ],
  },
});
