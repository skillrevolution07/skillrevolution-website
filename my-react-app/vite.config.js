import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("framer-motion")) return "motion";
          if (id.includes("swiper")) return "swiper";
          if (id.includes("react-icons") || id.includes("lucide-react")) return "icons";
          if (id.includes("react-router-dom")) return "router";
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/")) return "react";
        },
      },
    },
  },
})
