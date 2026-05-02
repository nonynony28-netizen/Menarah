import React from "react";

const features = [
  "جودة عالية",
  "تصاميم عصرية",
  "أسعار منافسة",
  "خدمة عملاء ممتازة",
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
        <span className="badge">حلول إنارة احترافية</span>

        <h1 className="hero-title">
          الإنارة الحديثة
        </h1>

        <p>
          تجربة إضاءة فاخرة تجمع بين الجمال والتقنية، مصممة خصيصاً لمشاريعك.
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

      {/* Features */}
      <section className="section">
        <h2>لماذا نحن؟</h2>

        <div className="grid">
          {features.map((item, i) => (
            <div className="card" key={i}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Top Products */}
      <section className="section">
        <h2>أهم المنتجات</h2>

        <div className="grid">
          {topProducts.map((item, i) => (
            <div className="card" key={i}>
              <h3>{item}</h3>
              <p>منتج مميز عالي الجودة</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>ابدأ مشروعك معنا اليوم</h2>
        <button onClick={() => (window.location.href = "#/contact")}>
          تواصل الآن
        </button>
      </section>

    </main>
  );
}

export default Home;
