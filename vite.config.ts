import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false,
    minify: 'esbuild', // ফাস্ট মিনিফিকেশন
    rollupOptions: {
      output: {
        // ✅ Safe Code Splitting: লাইব্রেরিগুলোকে আলাদা ফাইলে ভাগ করে, যাতে মেইন সাইট দ্রুত লোড হয়
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react'; // React আলাদা
            if (id.includes('framer-motion')) return 'vendor-anim'; // অ্যানিমেশন আলাদা (ভারী লাইব্রেরি)
            return 'vendor-libs'; // বাকি সব আলাদা
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    host: true
  }
});
