import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    port: 3000
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/app/styles/index.scss";`
      }
    }
  }
})
