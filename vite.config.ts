import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  // ඔබේ Repository නම gamage2026 නිසා base එක මේ විදියට විය යුතුයි
  base: "/gamage2026/", 
  css: {
    // Tailwind v4 වල LightningCSS syntax error මඟහරවා ගැනීමට
    transformer: 'postcss',
    minify: false
  },
  build: {
    // Vite වල default lightningcss එක වෙනුවට esbuild මඟින් CSS minify කිරීමට
    cssMinify: 'esbuild'
  }
})

