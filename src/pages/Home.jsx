import React from "react";

function Home() {
  return (
    <main className="page hero">
      <section>
        <span className="badge">حلول إنارة وتأسيس كهربائي</span>

        <h1 className="hero-title">
          الإنارة الحديثة
        </h1>

        <p>
          أفضل حلول الإضاءة والسبوتات والأسلاك بجودة عالية تناسب جميع المشاريع.
        </p>

        <div className="hero-actions">
          <button
            onClick={() => (window.location.href = "#/products")}
          >
            اكتشف المنتجات
          </button>

          <button
            className="outline"
            onClick={() => (window.location.href = "#/contact")}
          >
            تواصل معنا
          </button>
        </div>
      </section>

      <section className="hero-card">
        <h3>جودة موثوقة</h3>
        <p>منتجات مناسبة لكل المشاريع الحديثة مع ضمان الأداء والاستمرارية.</p>
      </section>
    </main>
  );
}

export default Home;
