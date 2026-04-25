import React from 'react';
import { motion } from 'framer-motion';

const Lighting = () => {
  return (
    <section id="lighting" className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">روائع <span className="text-yellow-600">الثريات والإضاءة</span></h2>
          <p className="text-gray-600 text-lg">لمسات سحرية تضفي فخامة لا مثيل لها على مساحاتك.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* كارت الثريات */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
          >
            <img src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=800&auto=format&fit=crop" alt="ثريات فاخرة" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">الثريات الكلاسيكية والمودرن</h3>
              <p className="text-gray-600">تشكيلات حصرية من الكريستال النقي والتصاميم العصرية للمجالس والصالات.</p>
            </div>
          </motion.div>

          {/* كارت لمبات سبوت لايت */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 relative"
          >
            <div className="absolute top-4 right-4 bg-gray-900 text-yellow-500 text-xs font-bold px-3 py-1 rounded-full z-10">الأكثر مبيعاً</div>
            <img src="https://images.unsplash.com/photo-1554224034-b10d58f310f6?q=80&w=800&auto=format&fit=crop" alt="لمبات سبوت لايت" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">لمبات سبوت لايت</h3>
              <p className="text-gray-600 mb-4">كفاءة عالية وإضاءة مريحة للعين، متوفرة بقدرات متعددة لتناسب كل زاوية.</p>
              <div className="flex gap-2 justify-center mt-4">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md font-bold">7 وات</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md font-bold">9 وات</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md font-bold">12 وات</span>
              </div>
            </div>
          </motion.div>

          {/* كارت الإضاءة الخارجية */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
          >
            <img src="https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?q=80&w=800&auto=format&fit=crop" alt="إضاءة خارجية" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">الإنارة الداخلية والخارجية</h3>
              <p className="text-gray-600">كشافات وإضاءة حدائق مقاومة للعوامل الجوية وتصميمات داخلية مخفية (Profile LED).</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Lighting;
