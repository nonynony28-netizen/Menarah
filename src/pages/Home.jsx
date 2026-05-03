import React from "react";

const features = [
  { title: "تصاميم عصرية", icon: "💡" },
  { title: "كفاءة طاقة عالية", icon: "⚡" },
  { title: "تنفيذ احترافي", icon: "🛠️" },
  { title: "ضمان وجودة", icon: "✅" },
];

const topProducts = [
  { name: "سبوت لايت", desc: "إضاءة داخلية عصرية" },
  { name: "ثريات فاخرة", desc: "تصاميم راقية للمنازل" },
  { name: "إنترفون", desc: "حلول تواصل حديثة" },
  { name: "أسلاك كهرباء", desc: "أمان وجودة عالية" },
];

function Home() {
  return (
    <main className="page hero">

      {/* ===== Hero Section ===== */}
      <section className="hero-grid">

        {/* Left (Text) */}
        <div>
          <span className="badge">حلول إنارة احترافية</span>

          <h1 className="hero-title">
            الإنارة الحديثة
          </h1>

          <p>
            إضاءة عصرية تجمع بين الأداء والجمال، مصممة خصيصاً لمشاريعك.
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

        {/* Right (Visual) */}
        <div className="hero-visual">
          <div className="hero-box">
            💡
          </div>
        </div>

      </section>

      {/* ===== Value Card ===== */}
      <section className="hero-card">
        <h3>جودة موثوقة</h3>
        <p>منتجات بمعايير عالمية مع دعم فني مستمر.</p>
      </section>

      {/* ===== Features ===== */}
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

      {/* ===== Products ===== */}
      <section className="section">
        <h2>أهم المنتجات</h2>

        <div className="grid">
          {topProducts.map((p, i) => (
            <div className="card product-card" key={i}>
              <div className="product-img">🛍️</div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta">
        <h2>ابدأ مشروعك معنا اليوم</h2>

        <p style={{ marginBottom: "15px" }}>
          فريقنا جاهز لمساعدتك في اختيار أفضل حلول الإضاءة.
        </p>

        <button onClick={() => (window.location.href = "#/contact")}>
          اطلب استشارة الآن
        </button>
      </section>

    </main>
  );
}

export default Home;
