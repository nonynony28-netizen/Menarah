import React from 'react';
import { motion } from 'framer-motion';

const Electrical = () => {
  const items = [
    { title: 'الأسلاك والكابلات', icon: '🔌', desc: 'أسلاك معتمدة ومطابقة للمواصفات العالمية.' },
    { title: 'أجهزة الإنترفون', icon: '☎️', desc: 'أنظمة اتصال مرئية وصوتية ذكية وآمنة.' },
    { title: 'قواطع الحماية', icon: '⚡', desc: 'قواطع كهربائية لحماية الدوائر من الأحمال الزائدة.' },
    { title: 'خراطيم ومواسير', icon: '🏗️', desc: 'خراطيم مرنة وصلبة لتأسيس الشبكات داخل الجدران.' }
  ];

  return (
    <section id="materials" className="py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 border-r-4 border-yellow-500 pr-4">
              مواد التشطيب <br/> والأساسات
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              الأساس القوي هو سر ديمومة وسلامة المبنى. نوفر لك كافة قطع التشطيب وأجهزة الإنترفون من كبرى المصانع المعتمدة لتضمن راحة البال.
            </p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md hover:bg-yellow-50/50 transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Electrical;
