import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@assets',
        replacement: path.resolve(__dirname, './src/assets'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, './src/components'),
      },
      {
        find: '@ts',
        replacement: path.resolve(__dirname, './src/ts'),
      },
      {
        find: '@styles',
        replacement: path.resolve(__dirname, './src/styles'),
      },
      {
        find: '@shared',
        replacement: path.resolve(__dirname, './src/shared'),
      },
      {
        find: '@enums',
        replacement: path.resolve(__dirname, './src/enums'),
      },
      {
        find: '@routes',
        replacement: path.resolve(__dirname, './src/routes'),
      },
      {
        find: '@config',
        replacement: path.resolve(__dirname, './src/config'),
      },
      {
        find: '@services',
        replacement: path.resolve(__dirname, './src/services'),
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, './src/pages'),
      },
      {
        find: '@redux',
        replacement: path.resolve(__dirname, './src/redux'),
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, './src/utils'),
      },
    ],
  },
});
