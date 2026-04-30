const products = [
  "الأسلاك والكابلات",
  "السبوتات والإنارة",
  "مستلزمات التأسيس",
];

function Products() {
  return (
    <main className="page">
      <h1>المنتجات</h1>

      <div className="grid">
        {products.map((item) => (
          <div className="card" key={item}>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;
