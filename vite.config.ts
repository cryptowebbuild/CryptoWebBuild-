import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import fs from 'fs';
import path from 'path';

// Custom Plugin: Automatically create 404.html for GitHub Pages / Netlify
const spaFallbackPlugin = () => {
  return {
    name: 'spa-fallback',
    closeBundle() {
      const dist = path.resolve('dist');
      const indexHtml = path.join(dist, 'index.html');
      const fourOhFourHtml = path.join(dist, '404.html');
      
      if (fs.existsSync(indexHtml)) {
        fs.copyFileSync(indexHtml, fourOhFourHtml);
        console.log('✨ Generated 404.html for SPA Routing Fallback');
      }
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    spaFallbackPlugin(),
    // Gzip Compression for 95+ PageSpeed
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // Brotli Compression (even better than Gzip)
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    })
  ],
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // 1. Core React (Keep together to avoid waterfall requests)
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            // 2. Heavy AI SDK (Isolate this so it doesn't slow down initial load)
            if (id.includes('@google/genai')) {
              return 'vendor-genai';
            }
            // 3. Animation Libs
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            // 4. Icons & UI Utilities
            if (id.includes('lucide-react') || id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'vendor-ui';
            }
            return 'vendor-libs';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  }
});