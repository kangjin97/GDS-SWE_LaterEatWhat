import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Enable CORS for a specific API
      '/api': {
        target: 'http://localhost:5173', // Replace with the API's base URL
        changeOrigin: true,
        cors: true,
      },
    },
  },
})
