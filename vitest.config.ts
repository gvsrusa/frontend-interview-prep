import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
    include: [
      'src/challenges/**/index.test.{ts,tsx,js,jsx}',
      'src/dsa/**/index.test.{ts,tsx,js,jsx}',
    ],
    css: true,
  },
})
