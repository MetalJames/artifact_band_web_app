import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { createHtmlPlugin } from "vite-plugin-html";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),

    // ✅ Generates a Sitemap Automatically
    sitemap({
      hostname: "https://artifact-band.vercel.app",
      readable: true, // Pretty format
      exclude: ["/private"], // Exclude unwanted routes
    }),

    // ✅ PWA Support (Optional)
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Artifact Metal Band",
        short_name: "Artifact",
        description:
          "Official website of Artifact Metal Band. Listen to thrash metal music and explore the band’s history.",
        theme_color: "#000000",
        background_color: "#000000",
        icons: [
          {
            src: "/favicon.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),

    // ✅ Helps Ensure Proper Meta Tags (for SEO)
    createHtmlPlugin({
      minify: true,
    }),
  ],

  // ✅ Ensure correct base URL (important for sitemap generation)
  base: "/",

  // ✅ Set Correct Build Output & Optimization
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Removes console.logs
        drop_debugger: true,
      },
    },
  },

  // ✅ Fixes for Vercel Deployment
  server: {
    host: "0.0.0.0",
    port: 5173,
  },

  // ✅ Aliases for Clean Imports
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});





// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
