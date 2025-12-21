import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // CRITICAL FIX: Target 'es2015' to support older mobile browsers (Opera Mini, UC, old Android).
    // Default 'modules' target leaves modern syntax (?. ??) that crashes older engines.
    target: 'es2015',
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
          'vendor-utils': ['@google/genai']
        }
      }
    },
    minify: 'esbuild',
    sourcemap: false,
    cssCodeSplit: true,
  },
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ""),
  }
});