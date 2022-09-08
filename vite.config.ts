import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pages from 'vite-plugin-pages';
import path from 'path';
import { RouteObject } from 'react-router';

interface sp45_RouteObject extends RouteObject {
  name?: string;
}

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    define: {
      this: 'window',
    },
  },
  plugins: [
    react(),
    pages({
      onRoutesGenerated: (routes: sp45_RouteObject[]) => {
        routes.forEach((route) => {
          route.name = route.path;
          if (route.path === 'Home') {
            route.path = '/';
          }
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
      '@typings': path.resolve(__dirname, './src/typings'),
      '@store': path.resolve(__dirname, './src/store.ts'),
    },
  },
});
