//vite.config.js
// base: process.env.VITE_BASE_PATH || "/Portfolio/Aakash_Jha"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base: process.env.VITE_BASE_PATH || "/"
  // base: '/Aakash_Jha/'
  base: '/'

})
