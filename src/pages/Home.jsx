import React from "react";

/* ===== بيانات مبدئية (تبدّلها لاحقاً بالصور الحقيقية) ===== */

// لماذا نحن
const features = [
  { title: "جودة عالية", icon: "💡" },
  { title: "كفاءة طاقة", icon: "⚡" },
  { title: "تنفيذ احترافي", icon: "🛠️" },
  { title: "ضمان وخدمة", icon: "✅" },
];

// الأكثر رواجاً – ENARAH
const enarahProducts = [
  { name: "سبوت لايت", desc: "إضاءة داخلية عصرية" },
  { name: "ثريا حديثة", desc: "تصميم فاخر" },
];

// الأكثر رواجاً – WELLMAX
const wellmaxProducts = [
  { name: "لمبات LED", desc: "توفير عالي للطاقة" },
  { name: "كشافات", desc: "إضاءة قوية خارجية" },
];

// شركاؤنا (استبدل بالإيمجات لاحقاً)
const partners = ["ENARAH", "WELLMAX", "Partner 3", "Partner 4"];

// مشاريع (استبدل بالإيمجات)
const projects = ["فيلا", "محل", "سقف حديث"];

// الفروع
const branches = ["طرابلس", "اجدابيا", "مصراتة", "سبها"];

function Home() {
  return (
    <main className="page hero">

      {/* ===== 1) HERO ===== */}
      <section className="hero-grid">

        {/* نص */}
        <div>
          <span className="badge">حلول إنارة احترافية</span>

          <h1 className="hero-title">
            الإنارة الحديثة
          </h1>

          <p>
            إضاءة عصرية تجمع بين الأداء والجمال، مصممة لتناسب جميع مشاريعك.
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
        </div>

        {/* عنصر بصري (استبدله بصورة لاحقاً) */}
        <div className="hero-visual">
          <div className="hero-box">💡</div>
        </div>
      </section>

      {/* ===== 2) لماذا نحن ===== */}
      <section className="section">
        <h2>لماذا نحن؟</h2>

        <div className="grid">
          {features.map((f, i) => (
            <div className="card feature-card" key={i}>
              <div className="icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>حلول عملية تناسب مختلف الاستخدامات.</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 3) الأكثر رواجاً ===== */}
      <section className="section">
        <h2>الأكثر رواجًا لدينا</h2>
        <p className="section-desc">
          منتجات مختارة بعناية يفضلها عملاؤنا في مختلف المشاريع
        </p>

        {/* ENARAH */}
        <h3 style={{ marginTop: "20px" }}>منتجات ENARAH</h3>
        <div className="grid">
          {enarahProducts.map((p, i) => (
            <div className="card product-card" key={i}>
              <div className="product-img">🛍️</div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* WELLMAX */}
        <h3 style={{ marginTop: "30px" }}>منتجات WELLMAX</h3>
        <div className="grid">
          {wellmaxProducts.map((p, i) => (
            <div className="card product-card" key={i}>
              <div className="product-img">🛍️</div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 4) شركاؤنا ===== */}
      <section className="section">
        <h2>شركاؤنا في النجاح</h2>

        <div className="grid">
          {partners.map((p, i) => (
            <div className="card" key={i}>
              <h3>{p}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 5) المشاريع ===== */}
      <section className="section">
        <h2>مشاريعنا</h2>

        <div className="grid">
          {projects.map((proj, i) => (
            <div className="card" key={i}>
              <h3>{proj}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 6) الفروع ===== */}
      <section className="section">
        <h2>فروعنا</h2>

        <div className="grid">
          {branches.map((b, i) => (
            <div className="card" key={i}>
              <h3>{b}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 7) CTA ===== */}
      <section className="cta">
        <h2>ابدأ مشروعك معنا اليوم</h2>

        <p style={{ marginBottom: "15px" }}>
          فريقنا جاهز لمساعدتك في اختيار أفضل حلول الإضاءة
        </p>

        <button onClick={() => (window.location.href = "#/contact")}>
          تواصل الآن
        </button>
      </section>

    </main>
  );
}

export default Home;
