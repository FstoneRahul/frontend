import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(),
  tailwindcss()
  ],
   server: {
    host: true, // allow external access
    allowedHosts: [
      "revenued-psammophytic-corrie.ngrok-free.dev"
    ],
    strictPort: false
  }
})
