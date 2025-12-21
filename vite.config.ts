import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 1. এটি জরুরি: _redirects ফাইল কপি করার জন্য
  publicDir: 'public', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false,
    // 2. নিরাপত্তা: জটিল manualChunks বাদ দেওয়া হয়েছে
    chunkSizeWarningLimit: 1000,
  },
  server: {
    host: true
  }
});
