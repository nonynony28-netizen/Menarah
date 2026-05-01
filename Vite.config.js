import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // 🔥 إضافة مهمة

export default defineConfig({
  plugins: [react()], // 🔥 هذا يحل مشكلة الشاشة البيضاء

  // إعدادات الخادم المحلي
  server: {
    port: 3000,
    open: true,
  },
  
  // إعدادات البناء
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: 'esbuild',
  },

  base: '/', // 🔥 مهم جداً لـ Vercel
});
