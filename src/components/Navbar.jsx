import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">الإنارة الحديثة</h2>

      <div className="nav-links">
        <a href="#/projects">المشاريع</a>
        <a href="#/branches">الفروع</a>
        <a href="#/contact">التواصل</a>
      </div>
    </nav>
  );
}

export default Navbar;
