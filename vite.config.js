import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "*.mp3"], // キャッシュするファイル
      manifest: {
        name: "Singing Stopper",
        short_name: "歌やめボタン",
        description: "歌っている人を止めるための緊急ボタン",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone", // ブラウザのURLバーを消してアプリっぽく見せる
        icons: [
          {
            src: "icon-192.png", // 後で publicフォルダに入れます
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icon-512.png", // 後で publicフォルダに入れます
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
