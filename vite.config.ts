import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  base: "/GMC-Sri-Lanka/",
  css: {
    // Tailwind v4 වල LightningCSS syntax error මඟහරවා ගැනීමට මෙය අනිවාර්ය වේ
    transformer: 'postcss',
    minify: false 
  },
  build: {
    // Vite වල default lightningcss එක වෙනුවට esbuild මඟින් CSS minify කිරීමට
    cssMinify: 'esbuild'
  }
})

