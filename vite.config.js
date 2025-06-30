// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  //base: "/portfolio/", // <- For GitHub
  base: "/", // <- For netlify
  plugins: [react()],
});
