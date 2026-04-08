import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { cloudflare } from "@cloudflare/vite-plugin";
// Мы не импортируем createServer здесь для билда, чтобы не тянуть серверные зависимости в клиент
// import { createServer } from "./server";

export default defineConfig(({ mode }) => ({
  // Если index.html лежит в папке client, раскомментируйте строку ниже:
  // root: "client",

  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    // Убеждаемся, что билд идет в корень dist
  },
  plugins: [react(), // Включаем плагин только если мы НЕ в режиме билда,
  // чтобы Vercel не пытался инициализировать экспресс во время компиляции
  mode === "development" ? expressPlugin() : [], cloudflare()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve",
    async configureServer(server) {
      // Динамический импорт, чтобы серверный код не мешал сборке клиента
      const { createServer } = await import("./server");
      const app = createServer();
      server.middlewares.use(app);
    },
  };
}