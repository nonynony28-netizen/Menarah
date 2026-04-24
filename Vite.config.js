import { defineConfig } from 'vite';

export default defineConfig({
  // إعدادات الخادم المحلي (أثناء التطوير على جهازك)
  server: {
    port: 3000,        // تحديد رقم المنفذ
    open: true,        // فتح الموقع في المتصفح تلقائياً عند تشغيل الأمر npm run dev
  },
  
  // إعدادات البناء (عند تجهيز الموقع للرفع على Vercel)
  build: {
    outDir: 'dist',    // اسم المجلد الذي سيحتوي على النسخة النهائية والمضغوطة من موقعك
    emptyOutDir: true, // مسح الملفات القديمة من مجلد dist قبل إنشاء نسخة جديدة
    minify: 'esbuild', // ضغط الأكواد لتسريع تحميل الموقع
  }
});
