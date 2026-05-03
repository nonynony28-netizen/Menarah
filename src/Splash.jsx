import React, { useEffect } from "react";
import splash from "./hero.jpg.PNG"; // المسار الصحيح حسب ملفك

function Splash({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish && onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <img src={splash} alt="welcome" className="splash-img" />
    </div>
  );
}

export default Splash;
