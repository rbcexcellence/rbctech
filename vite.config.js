import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        services: resolve(__dirname, "services.html"),
        contact: resolve(__dirname, "contact.html"),
        impressum: resolve(__dirname, "impressum.html"),
        datenschutz: resolve(__dirname, "datenschutz.html"),
        notFound: resolve(__dirname, "404.html"),
      },
    },
  },
});
