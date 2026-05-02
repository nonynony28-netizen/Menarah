import React from "react";

const partners = ["شركة 1", "شركة 2", "شركة 3"];

function Partners() {
  return (
    <main className="page">
      <h1>الشركاء</h1>

      <div className="grid">
        {partners.map((p) => (
          <div className="card" key={p}>
            <h3>{p}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Partners;
