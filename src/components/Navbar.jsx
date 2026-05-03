import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">الإنارة الحديثة</h2>

        {/* زر القائمة */}
        <div className="menu-btn" onClick={() => setOpen(true)}>
          ☰
        </div>
      </nav>

      {/* الخلفية */}
      <div className={`overlay ${open ? "show" : ""}`} onClick={() => setOpen(false)}></div>

      {/* القائمة */}
      <div className={`side-menu ${open ? "open" : ""}`}>
        
        <button className="close-btn" onClick={() => setOpen(false)}>✕</button>

        <a href="#/projects" onClick={() => setOpen(false)}>المشاريع</a>
        <a href="#/branches" onClick={() => setOpen(false)}>الفروع</a>
        <a href="#/contact" onClick={() => setOpen(false)}>اتصل بنا</a>

      </div>
    </>
  );
}

export default Navbar;
