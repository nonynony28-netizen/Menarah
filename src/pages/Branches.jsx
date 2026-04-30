const branches = ["طرابلس", "اجدابيا", "مصراتة", "سبها"];

function Branches() {
  return (
    <main className="page">
      <h1>الفروع</h1>

      <div className="grid">
        {branches.map((b) => (
          <div className="card" key={b}>
            <h3>{b}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Branches;
