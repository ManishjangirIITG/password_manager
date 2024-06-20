import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/password_manager/',
  plugins: [react()],
  server: {
    fs: {
      strict: false
    },
    mimeTypes: {
      'text/javascript': ['js','jsx']
    }
  }
})
