import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import pages from "vite-plugin-pages";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    pages({
      dirs: "src/views",
      exclude: ["**/components/*.vue"],
      extendRoute(route, parent) {
        if (route.path === "/") {
          return {
            ...route,
            meta: {
              layout: "/home",
            },
          };
        }
      },
    }),
  ],
});
