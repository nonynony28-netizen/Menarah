import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Layout({ title, children }) {
  return (
    <main style={styles.page}>
      <h1>{title}</h1>
      <p>{children}</p>
    </main>
  );
}

function Home() {
  return (
    <main style={styles.hero}>
      <nav style={styles.nav}>
        <Link style={styles.logo} to="/">الإنارة الحديثة</Link>

        <div style={styles.links}>
          <Link to="/products">المنتجات</Link>
          <Link to="/brands">العلامات التجارية</Link>
          <Link to="/partners">الشركاء</Link>
          <Link to="/projects">المشاريع</Link>
          <Link to="/about">من نحن</Link>
          <Link to="/branches">الفروع</Link>
          <Link to="/contact">تواصل معنا</Link>
        </div>
      </nav>

      <section style={styles.heroContent}>
        <span style={styles.badge}>حلول إنارة وتأسيس كهربائي</span>
        <h1 style={styles.title}>الإنارة الحديثة</h1>
        <p style={styles.text}>
          مواد تأسيس كهربائي، أسلاك وكوابل، سبوتات، إنارات، وثريات بجودة عالية وتصميم احترافي.
        </p>
        <Link style={styles.button} to="/products">اكتشف المنتجات</Link>
      </section>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Layout title="المنتجات">الأسلاك والكابلات، السبوتات، الإنارات، ومستلزمات التأسيس.</Layout>} />
        <Route path="/brands" element={<Layout title="العلامات التجارية">enarah و wellmax.</Layout>} />
        <Route path="/partners" element={<Layout title="الشركاء والوكالات">وكلاء وموزعون لعدة شركات موثوقة.</Layout>} />
        <Route path="/projects" element={<Layout title="المشاريع">نماذج من مشاريع الإنارة والتأسيس الكهربائي.</Layout>} />
        <Route path="/about" element={<Layout title="من نحن">شركة متخصصة في حلول الإنارة ومواد التأسيس الكهربائي.</Layout>} />
        <Route path="/branches" element={<Layout title="الفروع">فروعنا ومناطق الخدمة.</Layout>} />
        <Route path="/contact" element={<Layout title="تواصل معنا">للاستفسارات، الطلبات، والشكاوى.</Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

const styles = {
  hero: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #061f4a, #0b4a99)",
    color: "white",
    direction: "rtl",
    fontFamily: "Tajawal, Arial, sans-serif",
  },
  nav: {
    padding: "24px 7%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "18px",
  },
  logo: {
    color: "white",
    fontSize: "26px",
    fontWeight: "800",
    textDecoration: "none",
  },
  links: {
    display: "flex",
    gap: "18px",
    flexWrap: "wrap",
  },
  heroContent: {
    padding: "120px 7%",
    maxWidth: "850px",
  },
  badge: {
    color: "#ff8a1d",
    fontWeight: "800",
  },
  title: {
    fontSize: "64px",
    margin: "20px 0",
  },
  text: {
    fontSize: "22px",
    lineHeight: "1.9",
  },
  button: {
    display: "inline-block",
    marginTop: "30px",
    background: "#ff8a1d",
    color: "white",
    padding: "16px 28px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "800",
  },
  page: {
    minHeight: "100vh",
    padding: "80px 7%",
    direction: "rtl",
    fontFamily: "Tajawal, Arial, sans-serif",
    background: "#f5f7fb",
    color: "#101828",
  },
};

export default App;
