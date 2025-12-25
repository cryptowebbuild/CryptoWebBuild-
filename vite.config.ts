import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import fs from 'fs';
import path from 'path';

// FORCE FIX: Create _redirects file for Cloudflare
const cloudflareRedirectsPlugin = () => {
  return {
    name: 'cloudflare-redirects',
    closeBundle() {
      const dist = path.resolve('dist');
      const redirectsPath = path.join(dist, '_redirects');
      // This line fixes the SEO 404 error
      fs.writeFileSync(redirectsPath, '/* /index.html  200');
      console.log('✅ Generated _redirects file for Cloudflare SPA');
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    cloudflareRedirectsPlugin(), // <--- This runs the fix automatically
    viteCompression({ algorithm: 'gzip', ext: '.gz' }),
    viteCompression({ algorithm: 'brotliCompress', ext: '.br' })
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
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) return 'vendor-react';
            if (id.includes('@google/genai')) return 'vendor-genai';
            if (id.includes('lucide-react') || id.includes('clsx') || id.includes('tailwind-merge')) return 'vendor-ui';
            return 'vendor-libs';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  }
});