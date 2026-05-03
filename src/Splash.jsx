import React, { useEffect } from "react";
import splash from "./picture/hero.jpg"; // المسار الصحيح

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
