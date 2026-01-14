import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import fs from 'fs';
import path from 'path';

// --- PLUGIN: Fix Cloudflare 404 & Directory Error ---
const cloudflareRedirectsPlugin = () => {
  let outDir = 'dist';
  return {
    name: 'cloudflare-redirects',
    configResolved(config: any) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      const dist = path.resolve(outDir);
      
      // Ensure output directory exists before writing _redirects
      if (!fs.existsSync(dist)) {
        fs.mkdirSync(dist, { recursive: true });
        console.log(`📁 Created ${outDir} directory manually`);
      }

      const redirectsPath = path.join(dist, '_redirects');
      // Create the redirects file
      fs.writeFileSync(redirectsPath, '/* /index.html 200');
      console.log('✅ Generated _redirects file for Cloudflare SPA');
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    cloudflareRedirectsPlugin(),
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
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
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