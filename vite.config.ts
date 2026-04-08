import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  plugins: [
    react(),
    copyRoutesPlugin(),  // ← добавь это
    mode === "development" ? expressPlugin() : [],
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

// Копирует _routes.json в dist/ при билде
function copyRoutesPlugin(): Plugin {
  return {
    name: "copy-routes",
    closeBundle() {
      if (fs.existsSync("_routes.json")) {
        fs.copyFileSync("_routes.json", "dist/_routes.json");
      }
      // Копируем содержимое functions/ а не саму папку
      if (fs.existsSync("functions/api")) {
        fs.mkdirSync("dist/functions/api", { recursive: true });
        const files = fs.readdirSync("functions/api");
        files.forEach(file => {
          fs.copyFileSync(`functions/api/${file}`, `dist/functions/api/${file}`);
        });
        console.log("✓ functions/api/ copied to dist/functions/api/");
      }
    },
  };
}

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve",
    async configureServer(server) {
      const { createServer } = await import("./server");
      const app = createServer();
      server.middlewares.use(app);
    },
  };
}



// import { defineConfig, Plugin } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// // Мы не импортируем createServer здесь для билда, чтобы не тянуть серверные зависимости в клиент
// // import { createServer } from "./server";

// export default defineConfig(({ mode }) => ({
//   // Если index.html лежит в папке client, раскомментируйте строку ниже:
//   // root: "client",

//   server: {
//     host: "::",
//     port: 8080,
//   },
//   build: {
//     outDir: "dist",
//     emptyOutDir: true,
//     // Убеждаемся, что билд идет в корень dist
//   },
//   plugins: [
//     react(),
//     // Включаем плагин только если мы НЕ в режиме билда,
//     // чтобы Vercel не пытался инициализировать экспресс во время компиляции
//     mode === "development" ? expressPlugin() : [],
//   ],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./client"),
//       "@shared": path.resolve(__dirname, "./shared"),
//     },
//   },
// }));

// function expressPlugin(): Plugin {
//   return {
//     name: "express-plugin",
//     apply: "serve",
//     async configureServer(server) {
//       // Динамический импорт, чтобы серверный код не мешал сборке клиента
//       const { createServer } = await import("./server");
//       const app = createServer();
//       server.middlewares.use(app);
//     },
//   };
// }
