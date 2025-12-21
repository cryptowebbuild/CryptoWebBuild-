import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Target es2015 to support older mobile webviews (Telegram/FB)
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    // Minify with esbuild for speed and smaller bundle size
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        // Advanced Manual Chunks to fix LCP and Bundle Size
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Split Core React Logic (Critical Path)
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom') || id.includes('react-helmet-async')) {
              return 'vendor-react';
            }
            // Split Heavy GenAI SDK (Lazy Loaded usually, but keep separate)
            if (id.includes('@google/genai')) {
              return 'vendor-genai';
            }
            // Group all other dependencies
            return 'vendor-libs';
          }
        }
      }
    },
    // Increase warning limit to prevent noise
    chunkSizeWarningLimit: 1000,
  },
  define: {
    // Securely stringify API key for client-side usage if needed
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ""),
  }
});