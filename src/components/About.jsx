import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 text-gray-800" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* المحتوى النصي */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 relative inline-block">
              عن المعرض
              <span className="absolute -bottom-3 right-0 w-2/3 h-1.5 bg-yellow-500 rounded"></span>
            </h2>
            
            <p className="text-lg leading-relaxed mb-6 text-gray-600">
              يعتبر <strong className="text-yellow-600">معرض الإنارة الحديثة</strong> الوجهة الرائدة والموثوقة لكل ما يخص عالم التأسيس الكهربائي وتكنولوجيا الإضاءة. نحن لا نبيع مجرد منتجات، بل نقدم حلولاً متكاملة تجمع بين الأمان المطلق واللمسة الجمالية الفاخرة.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 mb-10">
              سواء كنت تبحث عن أحدث التصاميم للثريات أو مواد التأسيس والتشطيب ذات الجودة العالمية، فإننا نضع بين يديك خبرتنا لنضيء مساحاتك بإبداع وتميز.
            </p>
            
            {/* بطاقة الموقع الجغرافي */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="inline-flex items-center gap-4 bg-white p-5 rounded-xl shadow-lg border-r-4 border-yellow-500"
            >
              <span className="text-3xl" aria-label="موقع">📍</span>
              <div>
                <p className="font-bold text-sm text-gray-400 mb-1">تفضل بزيارتنا</p>
                <p className="font-medium text-gray-900 text-lg">ليبيا - بنغازي - الليثي <br/> مقابل مدرسة العيد الفضي</p>
              </div>
            </motion.div>
          </motion.div>

          {/* المحتوى البصري (الصورة مع تأثيرات الخلفية) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-12 md:mt-0"
          >
            {/* مربع خلفي للزينة */}
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-yellow-600 rounded-2xl transform translate-x-6 translate-y-6 -z-10 shadow-2xl"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1565814329452-e1efa11c5e89?q=80&w=1000&auto=format&fit=crop" 
              alt="تصميم داخلي مع ثريات فاخرة وعدسة 24mm" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover border-4 border-white"
            />
            
            {/* عنصر عائم دائري */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-gray-900 text-yellow-500 font-bold p-4 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.3)] w-28 h-28 flex flex-col items-center justify-center text-center border-2 border-yellow-500"
            >
              <span className="text-2xl block mb-1">💡</span>
              <span className="text-sm leading-tight">جودة<br/>عالية</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
