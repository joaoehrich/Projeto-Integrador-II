import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Projeto-Integrador-II/',
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    fs: {
      allow: ['.']
    }
  },
  appType: 'mpa' // Multi-Page Application: não intercepta rotas .html
})