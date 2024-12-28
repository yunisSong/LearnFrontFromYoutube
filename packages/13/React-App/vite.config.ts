import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { resolve } from 'path';
import path from 'path';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, './src/'),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '/assets': 'src/assets/',
      '/menu': 'src/assets/Slide',
    },
  },
});
