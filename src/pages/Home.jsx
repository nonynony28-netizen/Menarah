import React from "react";
import { motion } from "framer-motion";

const features = [
  { title: "جودة عالية", desc: "منتجات موثوقة للمشاريع السكنية والتجارية." },
  { title: "حلول متكاملة", desc: "إنارة، سبوتات، أسلاك، وكوابل كهربائية." },
  { title: "اختيار احترافي", desc: "منتجات ENARAH و WELLMAX بعناية." },
];

const products = [
  "منتجات ENARAH",
  "منتجات WELLMAX",
  "الأكثر رواجًا",
];

function Home() {
  return (
    <main className="page">

      {/* 🔥 Glow Background */}
      <div className="glow-bg"></div>

      {/* ===== HERO ===== */}
      <section className="hero-grid">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge">حلول إنارة وتأسيس كهربائي</span>

          <h1 className="hero-title float">
            الإنارة الحديثة
          </h1>

          <p>
            موقع متخصص في حلول الإنارة الحديثة، السبوتات، الأسلاك، الكوابل،
            والثريات بجودة عالية وهوية احترافية.
          </p>

          <div className="hero-actions">
            <button onClick={() => (window.location.href = "#/products")}>
              استعرض المنتجات
            </button>

            <button
              className="outline"
              onClick={() => (window.location.href = "#/contact")}
            >
              تواصل معنا
            </button>
          </div>
        </motion.div>

        {/* 💡 VISUAL */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="luxury-light float">
            <span>💡</span>
          </div>
        </motion.div>
      </section>

      {/* ===== FEATURES ===== */}
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2>لماذا نحن؟</h2>

        <div className="grid">
          {features.map((item, index) => (
            <motion.div
              className="card"
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="product-placeholder">⚡</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== PRODUCTS ===== */}
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2>الأكثر رواجًا لدينا</h2>

        <div className="grid">
          {products.map((item, index) => (
            <motion.div
              className="card product-card"
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="product-placeholder">✦</div>
              <h3>{item}</h3>
              <p>منتجات مختارة بعناية تناسب مشاريع الإنارة الحديثة.</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== CTA ===== */}
      <motion.section
        className="cta"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="hero-title">
          ابدأ مشروعك معنا اليوم
        </h2>

        <p>اختر حلول إنارة موثوقة بتصميم يناسب مشروعك.</p>

        <button onClick={() => (window.location.href = "#/contact")}>
          تواصل الآن
        </button>
      </motion.section>

    </main>
  );
}

export default Home;
