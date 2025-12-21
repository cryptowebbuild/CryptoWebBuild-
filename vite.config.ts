import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // CRITICAL: Target 'es2015' prevents white screen on older mobile browsers
    target: 'es2015',
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Advanced Code Splitting:
        // 1. Separates React core to 'vendor-react'
        // 2. Separates GenAI SDK to 'vendor-genai'
        // 3. Moves all other node_modules to 'vendor-libs'
        // This keeps the main 'index.js' tiny and ensures better caching.
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom') || id.includes('react-helmet-async')) {
              return 'vendor-react';
            }
            if (id.includes('@google/genai')) {
              return 'vendor-genai';
            }
            return 'vendor-libs';
          }
        }
      }
    },
    minify: 'esbuild',
    sourcemap: false,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1000,
  },
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ""),
  }
});