import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">الإنارة الحديثة</h2>

        {/* روابط عادية (ديسكتوب) */}
        <div className="nav-links">
          <Link to="/">الرئيسية</Link>
          <Link to="/projects">المشاريع</Link>
          <Link to="/branches">الفروع</Link>
          <Link to="/contact">التواصل</Link>
        </div>

        {/* زر القائمة للموبايل */}
        <div className="menu-btn" onClick={() => setOpen(true)}>
          ☰
        </div>
      </nav>

      {/* الخلفية */}
      <div className={`overlay ${open ? "show" : ""}`} onClick={() => setOpen(false)}></div>

      {/* القائمة الجانبية */}
      <div className={`side-menu ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>✕</button>

        <Link to="/" onClick={() => setOpen(false)}>🏠 الرئيسية</Link>
        <Link to="/projects" onClick={() => setOpen(false)}>📁 المشاريع</Link>
        <Link to="/branches" onClick={() => setOpen(false)}>📍 الفروع</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>📞 التواصل</Link>
      </div>
    </>
  );
}

export default Navbar;
