import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import fs from 'fs';
import path from 'path';

// --- PLUGIN: FORCE FIX Cloudflare 404 Error ---
const cloudflareRedirectsPlugin = () => {
  return {
    name: 'cloudflare-redirects',
    closeBundle() {
      const dist = path.resolve(__dirname, 'dist');
      
      // CRITICAL FIX: Check if 'dist' exists, if not create it.
      // This prevents the "ENOENT" error during build.
      if (!fs.existsSync(dist)) {
        fs.mkdirSync(dist, { recursive: true });
      }

      const redirectsPath = path.join(dist, '_redirects');
      // Create the file that tells Cloudflare to serve index.html for all routes
      fs.writeFileSync(redirectsPath, '/* /index.html 200');
      console.log('✅ Generated _redirects file for Cloudflare SPA');
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    cloudflareRedirectsPlugin(),
    // Compression settings
    viteCompression({ algorithm: 'gzip', ext: '.gz' }),
    viteCompression({ algorithm: 'brotliCompress', ext: '.br' })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false, // Save memory/space
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Split heavy libraries into separate chunks for better caching
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion') || id.includes('lucide-react')) {
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