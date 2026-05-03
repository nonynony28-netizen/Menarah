import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <HashRouter>

      {/* Navbar */}
      <Navbar />

      {/* الصفحات */}
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

    </HashRouter>
  );
}

export default App;
