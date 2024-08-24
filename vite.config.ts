import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // Customize the generated class names if needed
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
  },
})
