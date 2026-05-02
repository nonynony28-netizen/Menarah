import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// 💡 رسالة تتبع للمبرمج للتأكد من عمل الكود
console.log("🚀 جاري تشغيل تطبيق React...");

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("❌ لم يتم العثور على عنصر root!");
  throw new Error("Root element not found. تأكد من وجود <div id='root'></div> داخل index.html");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
