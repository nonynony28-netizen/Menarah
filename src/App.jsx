import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import EnarahProduct from './components/EnarahProduct';
import WilmaxProducts from './components/WilmaxProducts';
import Lighting from './components/Lighting';
import Electrical from './components/Electrical';
import Footer from './components/Footer';
import './App.css'; // استيراد ملف التنسيقات والألوان

function App() {
  return (
    // استخدام خط تجوال وتحديد اتجاه الموقع ليكون من اليمين لليسار
    <div className="font-tajawal antialiased text-gray-800 bg-gray-50 selection:bg-yellow-500 selection:text-gray-900" dir="rtl">
      <Hero />
      <About />
      <EnarahProduct />
      <WilmaxProducts />
      <Lighting />
      <Electrical />
      <Footer />
    </div>
  );
}

export default App;
