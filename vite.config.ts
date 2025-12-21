import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Custom Plugin: Automatically create 404.html for SPA Fallback
const spaFallbackPlugin = () => {
  return {
    name: 'spa-fallback',
    closeBundle() {
      // Use path.resolve('dist') which resolves relative to cwd by default
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
    spaFallbackPlugin()
  ],
  build: {
    target: 'es2015', // Compatibility for older mobile webviews
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    minify: 'esbuild',
    cssCodeSplit: true, // Split CSS to remove unused styles from critical path
    sourcemap: false, // Disable source maps for production speed
    rollupOptions: {
      output: {
        // Advanced Manual Chunks for PageSpeed 95+
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // 1. Core React (Critical Path)
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom') || id.includes('react-helmet-async')) {
              return 'vendor-react';
            }
            // 2. GenAI SDK (Heavy - separate to avoid blocking main thread)
            if (id.includes('@google/genai')) {
              return 'vendor-genai';
            }
            // 3. Animation Library (Heavy - separate for LCP optimization)
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            // 4. Icons & UI Utilities
            if (id.includes('lucide-react') || id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'vendor-ui';
            }
            // 5. Fallback for remaining dependencies
            return 'vendor-libs';
          }
        }
      }
    },
    chunkSizeWarningLimit: 800,
  },
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ""),
  }
});