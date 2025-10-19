import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
const isCI = process.env.GITHUB_ACTIONS === 'true'
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  base: isCI ? '/5032w12efolio/' : '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
