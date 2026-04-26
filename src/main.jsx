import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// إذا كان لديك ملف index.css منفصل لتنسيقات Tailwind الأساسية، يمكنك استدعاؤه هنا
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
