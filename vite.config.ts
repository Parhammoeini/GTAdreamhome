import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: 'GTA homes',
  base: '/', // Essential for custom domains
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})
