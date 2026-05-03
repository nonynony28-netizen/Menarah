import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">الإنارة الحديثة</h2>

      <div className="nav-links">
        <Link to="/">الرئيسية</Link>
        <Link to="/projects">المشاريع</Link>
        <Link to="/branches">الفروع</Link>
        <Link to="/contact">التواصل</Link>
      </div>
    </nav>
  );
}

export default Navbar;
