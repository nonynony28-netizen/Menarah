import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">الإنارة الحديثة</h2>

      <div className="nav-links">
        <a href="#/">الرئيسية</a>
        <a href="#/products">المنتجات</a>
        <a href="#/projects">المشاريع</a>
        <a href="#/brands">العلامات</a>
        <a href="#/branches">الفروع</a>
        <a href="#/contact">تواصل</a>
      </div>
    </nav>
  );
}

export default Navbar;
