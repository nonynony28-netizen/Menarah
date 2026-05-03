import React, { useEffect } from "react";
import splash from "../picture/hero.jpg"; // تأكد من المسار

function Splash({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish(); // ينتقل إلى App.jsx
    }, 3000); // 3 ثواني

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <img src={splash} alt="welcome" className="splash-img" />
    </div>
  );
}

export default Splash;
