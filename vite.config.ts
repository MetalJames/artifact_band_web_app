import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [
    react(),

    // ✅ PWA Support (Optional)
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Artifact Thrash Metal Band",
        short_name: "Artifact",
        description:
          "Official website of Artifact Thrash Metal Band. Listen to full albums, singles, and explore the band's history.",
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
    // createHtmlPlugin({
    //   minify: true,
    // }),
  ],

  // ✅ Ensure correct base URL
  // base: "/",

  // ✅ Set Correct Build Output & Optimization
  // build: {
  //   outDir: "dist",
  //   sourcemap: false,
  //   minify: "terser",
  //   terserOptions: {
  //     compress: {
  //       drop_console: true, // Removes console.logs
  //       drop_debugger: true,
  //     },
  //   },
  // },

  // ✅ Fixes for Vercel Deployment
  // server: {
  //   host: "0.0.0.0",
  //   port: 5173,
  // },

  // // ✅ Aliases for Clean Imports
  // resolve: {
  //   alias: {
  //     "@": "/src",
  //   },
  // },
});