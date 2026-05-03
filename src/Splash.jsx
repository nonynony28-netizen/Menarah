import React, { useEffect } from "react";

function Splash({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish && onFinish();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <h1 className="splash-logo">الإنارة الحديثة</h1>
        <p className="splash-tagline">حلول إنارة احترافية بمعايير عالمية</p>

        <div className="splash-loader"></div>
      </div>
    </div>
  );
}

export default Splash;
