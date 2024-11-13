import React from "react";
import './App.css';
import Home from "./components/Home"

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "lightgreen" }}>
        <span style={{ background: "darkgreen" }}>Chameleon Blog</span>
      </h1>
      <Home />
    </div>
  );
}

export default App;
