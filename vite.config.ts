import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 👈 Tailwind Plugin එක මෙතැන තිබිය යුතුමයි!
  ],
  base: '/gamage2026/', // 👈 මුලට සහ අගට / ලකුණ අනිවාර්යයි!
})
