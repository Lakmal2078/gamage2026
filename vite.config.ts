import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  base: "/GMC-Sri-Lanka/", 
  css: {
    transformer: 'postcss' // CSS warning එක නැති කරගන්න මේක එකතු කරන්න
  }
})

