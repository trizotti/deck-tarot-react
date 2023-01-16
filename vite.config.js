import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://trizotti.github.io/deck-tarot-react/',
  build: {
    outDir: 'build',
  },
})
