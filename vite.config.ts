import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),

    // ✅ Generate Sitemap Automatically
    sitemap({
      hostname: "https://artifact-band.vercel.app",
      exclude: ["/private-page"], // Exclude any private pages
      readable: true, // Makes sitemap easier to read
      dynamicRoutes: ["/music/no_one", "/music/dead_silence_remastered"], // Dynamic routes if needed
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
  ],
});







// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
