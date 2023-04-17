import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@components':path.resolve(__dirname, './src/Components'),
      '@styles':path.resolve(__dirname, './src/styles'),
      '@context':path.resolve(__dirname, './src/context'),
      '@containers':path.resolve(__dirname, './src/containers'),
      '@hooks':path.resolve(__dirname, './src/hooks'),
      '@routes':path.resolve(__dirname, './src/Routes'),
      '@pages':path.resolve(__dirname, './src/pages'),
      '@services':path.resolve(__dirname, './src/services'),
    }
  }
})
