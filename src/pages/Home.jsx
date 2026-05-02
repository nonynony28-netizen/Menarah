import React from "react";

function Home() {
  return (
    <main className="page hero">
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

      <section className="hero-card">
        <h3>إضاءة بمستوى عالمي</h3>
        <p>نقدم لك أحدث تقنيات الإضاءة مع تصميم فاخر يناسب جميع المشاريع.</p>
      </section>
    </main>
  );
}

export default Home;
