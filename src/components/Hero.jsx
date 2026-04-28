import React from 'react';

const Hero = () => {
  return (
    <>
      {/* دمج أكواد الـ CSS (الخطوط والحركات) مباشرة داخل المكون لتجنب أخطاء البناء */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap');

          /* تعريف حركات الدخول (Animations) */
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-50px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in-down {
            animation: fadeInDown 1s ease-out forwards;
          }

          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out 0.3s forwards;
            opacity: 0; /* يبدأ مخفياً حتى يبدأ تأثير الحركة */
          }
        `}
      </style>

      <section 
        id="home" 
        /* تطبيق خط تجوال على القسم بالكامل */
        className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gray-900 text-white" 
        style={{ fontFamily: "'Tajawal', sans-serif" }}
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

        {/* المحتوى النصي */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 drop-shadow-[0_0_20px_rgba(234,179,8,0.6)] animate-fade-in-down">
            معرض الإنارة الحديثة
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light leading-relaxed animate-fade-in-up">
            الوجهة الأولى لمواد التأسيس الكهربائي، أرقى الثريات، ولمبات سبوت لايت المتميزة.
          </p>
          
          <a
            href="#products"
            className="inline-block px-10 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold rounded-full text-lg shadow-[0_0_15px_rgba(234,179,8,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(234,179,8,0.8)] active:scale-95 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            تصفح منتجاتنا
          </a>
        </div>
        
        {/* تأثير إضاءة (Glow) في أسفل الشاشة للدمج مع القسم التالي */}
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
      </section>
    </>
  );
};

export default Hero;
