import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/GMC-Sri-Lanka/", 
  css: {
    transformer: 'postcss' // මේ කොටස අනිවාර්යයෙන්ම තිබිය යුතුයි
  }
})

