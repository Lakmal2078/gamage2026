import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/gamage2026/', // 👈 මේ පේළිය අනිවාර්යයෙන්ම එකතු කරන්න!
})

