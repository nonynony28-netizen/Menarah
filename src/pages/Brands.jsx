import React from "react";

const brands = [
  { name: "enarah", desc: "منتجات إنارة حديثة" },
  { name: "wellmax", desc: "حلول كهربائية موثوقة" },
];

function Brands() {
  return (
    <main className="page">
      <h1>العلامات التجارية</h1>

      <div className="grid">
        {brands.map((b) => (
          <div className="card" key={b.name}>
            <h2>{b.name}</h2>
            <p>{b.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Brands;
