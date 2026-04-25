import React from 'react';
import { motion } from 'framer-motion';

const EnarahProducts = () => {
  const products = [
    { id: 1, title: 'مفاتيح إضاءة ذكية', desc: 'مفاتيح عصرية تناسب الديكورات الحديثة بألوان متعددة.', img: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop' },
    { id: 2, title: 'أفياش ومآخذ طاقة', desc: 'أفياش آمنة وعالية التحمل مصممة بأعلى معايير السلامة.', img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop' },
    { id: 3, title: 'لوحات توزيع كهربائية', desc: 'لوحات رئيسية وفرعية تضمن توزيعاً آمناً للكهرباء في منزلك.', img: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?q=80&w=800&auto=format&fit=crop' }
  ];

  return (
    <section id="enarah" className="py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            منتجات شركة <span className="text-yellow-500">إنارة</span>
          </motion.h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">الجودة العالية والتصميم المبتكر في كل تفصيلة من تفاصيل التأسيس الكهربائي.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 group transition-all duration-300 hover:shadow-yellow-500/20 hover:border-yellow-200"
            >
              <div className="h-64 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnarahProducts;
