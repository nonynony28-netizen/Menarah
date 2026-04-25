import React from 'react';
import { motion } from 'framer-motion';

const WilmaxProducts = () => {
  return (
    <section id="wilmax" className="py-20 bg-gray-900 text-white relative overflow-hidden" dir="rtl">
      {/* تأثير إضاءة خلفي */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="inline-block bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-yellow-400 font-bold flex items-center gap-2">
                <span>⭐</span> شريك النجاح
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              منتجات شركة <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">ويلماكس</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              نقدم لكم تشكيلة واسعة من منتجات Wilmax العالمية التي تتميز بالعمر الافتراضي الطويل والمتانة الفائقة ضد التغيرات الكهربائية. الاختيار الأمثل للمشاريع والمنازل الفاخرة.
            </p>
            
            {/* ملصق الضمان البارز */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-6 bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-2xl border border-gray-600 shadow-xl"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(234,179,8,0.4)] text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-yellow-500 mb-1">ضمان لمدة سنتين</h4>
                <p className="text-gray-300">استبدال فوري لجميع منتجات ويلماكس.</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop" 
              alt="مواد كهربائية ويلماكس" 
              className="rounded-3xl shadow-2xl object-cover h-[500px] w-full border-4 border-gray-800"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WilmaxProducts;
