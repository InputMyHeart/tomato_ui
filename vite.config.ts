import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@tomatoUi': path.resolve(__dirname, './src/tomatoUi')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@tomatoUi/style/tomatoUi.scss";`
      }
    }
  }
})
