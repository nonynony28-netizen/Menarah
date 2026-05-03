import React, { useEffect } from "react";
import splash from "../picture/hero.jpg";

function Splash({ onFinish }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <img src={splash} alt="welcome" />
    </div>
  );
}

export default Splash;
