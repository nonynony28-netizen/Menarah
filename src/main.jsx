import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Splash from "./Splash";
import "./index.css";

function Root() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Splash onFinish={() => setLoading(false)} />;
  }

  return <App />;
}

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
