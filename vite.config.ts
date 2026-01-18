import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: 'GTA homes', // Tells Vite your index.html is in here
  build: {
    outDir: '../dist', // Puts the final website in a folder at the root level for Vercel
    emptyOutDir: true
  },
  server: {
    port: 3000,
    open: true
  }
})
