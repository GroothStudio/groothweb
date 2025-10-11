import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/gln/",
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "../main/dist/gln",
    emptyOutDir: true,
  },
  server: {
    port: 5174,
    open: true,
    historyApiFallback: true,
  },
});
