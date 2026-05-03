import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

// ❗ عطّل Navbar مؤقتاً
// import Navbar from "./components/Navbar";

import Home from "./pages/Home";

// ❗ عطّل باقي الصفحات مؤقتاً
// import Products from "./pages/Products";
// import Brands from "./pages/Brands";
// import Partners from "./pages/Partners";
// import Projects from "./pages/Projects";
// import About from "./pages/About";
// import Branches from "./pages/Branches";
// import Contact from "./pages/Contact";

function App() {
  return (
    <HashRouter>

      {/* Navbar متوقف مؤقتاً */}
      {/* <Navbar /> */}

      <div className="app-container">
        <Routes>

          {/* فقط الصفحة الرئيسية */}
          <Route path="/" element={<Home />} />

        </Routes>
      </div>

    </HashRouter>
  );
}

export default App;
