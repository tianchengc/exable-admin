import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import inject from '@rollup/plugin-inject';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    inject({
      process: 'process/browser',
    }),
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@store': path.resolve(__dirname, './src/store')
    },
  },
  build: {
    sourcemap: false, // Enable source maps for production builds
  }
});
