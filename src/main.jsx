/* ====== THEME ====== */
:root{
  --blue-900:#020617;
  --blue-800:#0b1e3c;
  --blue-700:#102a56;

  --text:#eaf2ff;
  --muted:#9fb3d9;

  --accent:#ff8a00;
}

/* ====== BASE ====== */
body{
  direction: rtl;
  font-family: "Tajawal", system-ui, sans-serif;
  margin:0;
  color:var(--text);
  overflow-x:hidden;

  background:
    radial-gradient(circle at 20% 30%, rgba(59,130,246,0.15), transparent 60%),
    radial-gradient(circle at 80% 70%, rgba(14,165,233,0.12), transparent 60%),
    linear-gradient(160deg, var(--blue-900), var(--blue-800) 60%, var(--blue-700));
}

/* ====== NAVBAR ====== */
.navbar{
  position:sticky;
  top:0;
  z-index:50;

  display:flex;
  justify-content:space-between;
  align-items:center;

  padding:12px 16px;

  background:rgba(11,30,60,.6);
  backdrop-filter:blur(10px);
  border-bottom:1px solid rgba(255,255,255,.05);
}

.logo{
  font-weight:900;
  font-size:16px;
}

.nav-links{
  display:flex;
  gap:12px;
}

.nav-links a{
  color:#c9d6f2;
  text-decoration:none;
  font-size:13px;
  font-weight:600;
  transition:.25s;
}

.nav-links a:hover{
  color:var(--accent);
}

/* ====== SPLASH ====== */
.splash-screen{
  position: fixed;
  inset: 0;
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background:
    radial-gradient(circle at 20% 30%, rgba(59,130,246,0.18), transparent 60%),
    radial-gradient(circle at 80% 70%, rgba(14,165,233,0.15), transparent 60%),
    linear-gradient(160deg, #020617, #0b1e3c 60%, #102a56);

  overflow: hidden;
  z-index: 9999;
}

/* محتوى السبلاش */
.splash-content{
  text-align: center;
  animation: fadeUp 1.2s ease forwards;
}

/* العنوان */
.splash-logo{
  font-size: clamp(28px, 5vw, 42px);
  font-weight: 900;
  letter-spacing: 1px;

  background: linear-gradient(135deg, #ffffff, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-shadow: 0 0 25px rgba(96,165,250,.25);
}

/* النص */
.splash-tagline{
  margin-top: 10px;
  font-size: 14px;
  color: var(--muted);
}

/* Loader */
.splash-loader{
  margin: 25px auto 0;
  width: 60px;
  height: 3px;
  border-radius: 20px;

  background: linear-gradient(90deg, transparent, #60a5fa, transparent);
  animation: loading 1.2s infinite;
}

/* ===== Animations ===== */
@keyframes fadeUp{
  0%{
    opacity:0;
    transform:translateY(25px);
  }
  100%{
    opacity:1;
    transform:translateY(0);
  }
}

@keyframes loading{
  0%{ transform: translateX(-100%); }
  100%{ transform: translateX(100%); }
}

/* ====== CONTENT ====== */
.page{
  max-width:1100px;
  margin:auto;
  padding:40px 20px;
}

.section{
  margin-top:50px;
}

p{
  color:var(--muted);
  font-size:15px;
  line-height:1.6;
}

/* ====== TITLES ====== */
.section h2{
  font-size:24px;

  background: linear-gradient(135deg, #ffffff, #93c5fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ====== BUTTON ====== */
button{
  padding:8px 16px;
  border-radius:999px;
  border:none;
  cursor:pointer;

  background:linear-gradient(135deg, var(--accent), #ff6a00);
  color:#0b1e3c;

  font-weight:700;
}

/* ====== MOBILE ====== */
@media (max-width:768px){

  .navbar{
    flex-direction:column;
    gap:10px;
  }

  .nav-links{
    justify-content:center;
    flex-wrap:wrap;
  }

}

عد
