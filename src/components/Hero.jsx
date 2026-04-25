import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gray-900 text-white" 
      dir="rtl"
    >
      {/* خلفية سينمائية مع طبقة تعتيم داكنة لإبراز النصوص */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1920&auto=format&fit=crop"
          alt="خلفية إضاءة سينمائية فاخرة"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-gray-900"></div>
      </div>

      {/* المحتوى النصي والحركات التفاعلية */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 drop-shadow-[0_0_20px_rgba(234,179,8,0.6)]"
        >
          معرض الإنارة الحديثة
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 font-light leading-relaxed"
        >
          الوجهة الأولى لمواد التأسيس الكهربائي، أرقى الثريات، ولمبات سبوت لايت المتميزة.
        </motion.p>
        
        <motion.a
          href="#products"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(234, 179, 8, 0.8)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-10 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold rounded-full text-lg shadow-[0_0_15px_rgba(234,179,8,0.5)] transition-all duration-300"
        >
          تصفح منتجاتنا
        </motion.a>
      </div>
      
      {/* تأثير إضاءة (Glow) في أسفل الشاشة للدمج مع القسم التالي */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
