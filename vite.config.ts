import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pages from 'vite-plugin-pages';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pages({
      onRoutesGenerated: (routes) => {
        routes.forEach((route) => {
          if (route.path !== '/') route.path = route.path.toLowerCase();
          return route;
        });
      },
    }),
  ],
  resolve: {
    alias: {
      '@layouts': path.resolve(__dirname, './src/layouts/'),
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@constants': path.resolve(__dirname, './src/constants/'),
      '@libs': path.resolve(__dirname, './src/libs/'),
      '@parts': path.resolve(__dirname, './src/parts'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@store': path.resolve(__dirname, './src/store.ts'),
    },
  },
});
