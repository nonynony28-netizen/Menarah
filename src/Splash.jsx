import React, { useEffect } from "react";

function Splash({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish && onFinish();
    }, 2000); // 2 ثواني فقط

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <h1 className="splash-logo">الإنارة الحديثة</h1>
      <p className="splash-text">حلول إنارة احترافية</p>
    </div>
  );
}

export default Splash;
