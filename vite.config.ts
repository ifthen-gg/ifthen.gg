import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  base: "./",
  build: {
    target: "esnext",
    outDir: "overwolf/dist",
    rollupOptions: {
      input: {
        background: "background.html",
        index: "index.html",
      },
    },
  },
});
