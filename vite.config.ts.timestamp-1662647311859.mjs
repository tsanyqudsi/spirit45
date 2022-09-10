// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pages from "vite-plugin-pages";
import path from "path";
var __vite_injected_original_dirname = "D:\\Documents\\VS Projects\\Web Projects\\spirit45";
var vite_config_default = defineConfig({
  esbuild: {
    define: {
      this: "window"
    }
  },
  plugins: [
    react(),
    pages({
      onRoutesGenerated: (routes) => {
        routes.forEach((route) => {
          route.name = route.path;
          if (route.path === "Home") {
            route.path = "/";
          }
          return route;
        });
      }
    })
  ],
  resolve: {
    alias: {
      "@layouts": path.resolve(__vite_injected_original_dirname, "./src/layouts/"),
      "@assets": path.resolve(__vite_injected_original_dirname, "./src/assets/"),
      "@constants": path.resolve(__vite_injected_original_dirname, "./src/constants/"),
      "@libs": path.resolve(__vite_injected_original_dirname, "./src/libs/"),
      "@parts": path.resolve(__vite_injected_original_dirname, "./src/parts"),
      "@components": path.resolve(__vite_injected_original_dirname, "./src/components/"),
      "@typings": path.resolve(__vite_injected_original_dirname, "./src/typings"),
      "@store": path.resolve(__vite_injected_original_dirname, "./src/store.ts")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEb2N1bWVudHNcXFxcVlMgUHJvamVjdHNcXFxcV2ViIFByb2plY3RzXFxcXHNwaXJpdDQ1XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxEb2N1bWVudHNcXFxcVlMgUHJvamVjdHNcXFxcV2ViIFByb2plY3RzXFxcXHNwaXJpdDQ1XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Eb2N1bWVudHMvVlMlMjBQcm9qZWN0cy9XZWIlMjBQcm9qZWN0cy9zcGlyaXQ0NS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCBwYWdlcyBmcm9tICd2aXRlLXBsdWdpbi1wYWdlcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IFJvdXRlT2JqZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW50ZXJmYWNlIHNwNDVfUm91dGVPYmplY3QgZXh0ZW5kcyBSb3V0ZU9iamVjdCB7XG4gIG5hbWU/OiBzdHJpbmc7XG59XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBlc2J1aWxkOiB7XG4gICAgZGVmaW5lOiB7XG4gICAgICB0aGlzOiAnd2luZG93JyxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBwYWdlcyh7XG4gICAgICBvblJvdXRlc0dlbmVyYXRlZDogKHJvdXRlczogc3A0NV9Sb3V0ZU9iamVjdFtdKSA9PiB7XG4gICAgICAgIHJvdXRlcy5mb3JFYWNoKChyb3V0ZSkgPT4ge1xuICAgICAgICAgIHJvdXRlLm5hbWUgPSByb3V0ZS5wYXRoO1xuICAgICAgICAgIGlmIChyb3V0ZS5wYXRoID09PSAnSG9tZScpIHtcbiAgICAgICAgICAgIHJvdXRlLnBhdGggPSAnLyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAbGF5b3V0cyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9sYXlvdXRzLycpLFxuICAgICAgJ0Bhc3NldHMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvYXNzZXRzLycpLFxuICAgICAgJ0Bjb25zdGFudHMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29uc3RhbnRzLycpLFxuICAgICAgJ0BsaWJzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2xpYnMvJyksXG4gICAgICAnQHBhcnRzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3BhcnRzJyksXG4gICAgICAnQGNvbXBvbmVudHMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29tcG9uZW50cy8nKSxcbiAgICAgICdAdHlwaW5ncyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy90eXBpbmdzJyksXG4gICAgICAnQHN0b3JlJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3N0b3JlLnRzJyksXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwVSxTQUFTLG9CQUFvQjtBQUN2VyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUhqQixJQUFNLG1DQUFtQztBQVd6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxNQUNKLG1CQUFtQixDQUFDLFdBQStCO0FBQ2pELGVBQU8sUUFBUSxDQUFDLFVBQVU7QUFDeEIsZ0JBQU0sT0FBTyxNQUFNO0FBQ25CLGNBQUksTUFBTSxTQUFTLFFBQVE7QUFDekIsa0JBQU0sT0FBTztBQUFBLFVBQ2Y7QUFDQSxpQkFBTztBQUFBLFFBQ1QsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxZQUFZLEtBQUssUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxNQUNwRCxXQUFXLEtBQUssUUFBUSxrQ0FBVyxlQUFlO0FBQUEsTUFDbEQsY0FBYyxLQUFLLFFBQVEsa0NBQVcsa0JBQWtCO0FBQUEsTUFDeEQsU0FBUyxLQUFLLFFBQVEsa0NBQVcsYUFBYTtBQUFBLE1BQzlDLFVBQVUsS0FBSyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxNQUMvQyxlQUFlLEtBQUssUUFBUSxrQ0FBVyxtQkFBbUI7QUFBQSxNQUMxRCxZQUFZLEtBQUssUUFBUSxrQ0FBVyxlQUFlO0FBQUEsTUFDbkQsVUFBVSxLQUFLLFFBQVEsa0NBQVcsZ0JBQWdCO0FBQUEsSUFDcEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
