import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/game_cd/',
  plugins: [
    react(),
  ],
});
