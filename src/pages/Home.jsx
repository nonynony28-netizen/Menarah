import React from "react";

function Home() {
  return (
    <main className="page hero">
      <section>
        <span className="badge">حلول إنارة وتأسيس كهربائي</span>
        <h1>الإنارة الحديثة</h1>
        <p>أفضل حلول الإضاءة والسبوتات والأسلاك بجودة عالية.</p>

        <div className="hero-actions">
          <button>اكتشف المنتجات</button>
          <button className="outline">تواصل معنا</button>
        </div>
      </section>

      <section className="hero-card">
        <h3>جودة موثوقة</h3>
        <p>منتجات مناسبة لكل المشاريع الحديثة.</p>
      </section>
    </main>
  );
}

export default Home;
