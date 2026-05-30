import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/GMC-Sri-Lanka/", // <--- මේ පේළිය අනිවාර්යයෙන්ම එකතු කරන්න!
})
