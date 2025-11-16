import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  base: '/anthonylsc/',
  plugins: [
    react(),
    // bundle visualizer (generates dist/stats.html)
    visualizer({ filename: 'dist/stats.html', open: false })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5174,
    open: true,
  },
})
