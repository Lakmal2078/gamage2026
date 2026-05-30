import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- මේක තියෙනවාද බලන්න

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- මේකත් මෙතන තියෙන්න ඕනේ
  ],
  base: "/GMC-Sri-Lanka/",
})
