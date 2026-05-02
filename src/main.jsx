import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function ErrorFallback({ error }) {
  return (
    <div style={{
      padding: 20,
      background: "#111",
      color: "red",
      fontSize: "18px"
    }}>
      <h1>فيه خطأ في الموقع</h1>
      <pre>{error?.message}</pre>
    </div>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return <ErrorFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
