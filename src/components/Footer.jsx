import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8 border-t-4 border-yellow-500" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* معلومات المعرض */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-500 mb-6">معرض الإنارة الحديثة</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              الخيار الأول في ليبيا لمواد التأسيس الكهربائي، الثريات الفاخرة، ولمبات سبوت لايت المعتمدة.
            </p>
          </div>

          {/* بيانات الاتصال */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-gray-100">تواصل معنا</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <span className="text-yellow-500 text-xl">📞</span>
                <span className="font-mono text-lg" dir="ltr">091 658 0068</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-500 text-xl">📞</span>
                <span className="font-mono text-lg" dir="ltr">092 658 0068</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-500 text-xl">✉️</span>
                <a href="mailto:Enarahmodern@gmail.com" className="hover:text-yellow-500 transition-colors">Enarahmodern@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* العنوان وساعات العمل */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-gray-100">موقع المعرض</h4>
            <div className="flex items-start gap-3 text-gray-400 mb-4">
              <span className="text-yellow-500 text-xl mt-1">📍</span>
              <p className="leading-relaxed">
                ليبيا - بنغازي - الليثي <br />
                مقابل مدرسة العيد الفضي
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 inline-block mt-2">
              <p className="text-sm text-yellow-400 font-bold flex items-center gap-2">
                <span>🕒</span> نتشرف بزيارتكم طيلة أيام الأسبوع
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} - معرض الإنارة الحديثة</p>
          <p className="mt-2 md:mt-0">تم التصميم والتطوير باحترافية</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
