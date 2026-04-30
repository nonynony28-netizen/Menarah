import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">الإنارة الحديثة</Link>

      <nav>
        <Link to="/">الرئيسية</Link>
        <Link to="/products">المنتجات</Link>
        <Link to="/brands">العلامات التجارية</Link>
        <Link to="/partners">الشركاء</Link>
        <Link to="/projects">المشاريع</Link>
        <Link to="/about">من نحن</Link>
        <Link to="/branches">الفروع</Link>
        <Link to="/contact">تواصل معنا</Link>
      </nav>
    </header>
  );
}

export default Navbar;
