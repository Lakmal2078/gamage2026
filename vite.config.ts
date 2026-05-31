import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 👈 මේ පේළිය තියෙනවද බලන්න

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 👈 මේ Plugin එක මෙතන තියෙන්නම ඕනේ!
  ],
})

