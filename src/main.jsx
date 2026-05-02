import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <div style={{color:"#fff",background:"#111",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontSize:32}}>TEST OK</div>;
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
