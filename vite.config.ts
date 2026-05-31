import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  base: "/GMC-Sri-Lanka/", 
  css: {
    transformer: 'postcss' // මේ කොටස අනිවාර්යයෙන්ම එකතු කරන්න
  }
})

