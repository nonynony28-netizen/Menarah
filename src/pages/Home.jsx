import React from "react";

const features = [
  "تصاميم عصرية",
  "كفاءة طاقة عالية",
  "تنفيذ احترافي",
  "ضمان وجودة",
];

const topProducts = [
  "سبوت لايت",
  "ثريات فاخرة",
  "إنترفون",
  "أسلاك كهرباء",
];

function Home() {
  return (
    <main className="page hero">

      {/* Hero */}
      <section>
        <span className="badge">حلول إنارة وتأسيس كهربائي</span>

        <h1 className="hero-title">
          الإنارة الحديثة
        </h1>

        <p>
          حلول إضاءة احترافية تجمع بين الأداء والجمال، مصممة لتناسب جميع مشاريعك.
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
      </section>

      {/* Value Card */}
      <section className="hero-card">
        <h3>جودة موثوقة</h3>
        <p>منتجات بمعايير عالمية مع دعم فني مستمر.</p>
      </section>

      {/* Features */}
      <section className="section">
        <h2>لماذا نحن؟</h2>
        <div className="grid">
          {features.map((f, i) => (
            <div className="card" key={i}>
              <h3>{f}</h3>
              <p>حلول عملية تناسب مختلف الاستخدامات.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Products */}
      <section className="section">
        <h2>أهم المنتجات</h2>
        <div className="grid">
          {topProducts.map((p, i) => (
            <div className="card" key={i}>
              <h3>{p}</h3>
              <p>منتج مميز بجودة عالية وأداء ثابت.</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>ابدأ مشروعك معنا اليوم</h2>
        <button onClick={() => (window.location.href = "#/contact")}>
          اطلب استشارة
        </button>
      </section>

    </main>
  );
}

export default Home;
