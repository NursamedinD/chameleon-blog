import React from "react";
import './App.css';
import About from "./components/About";
import Home from "./components/Home";
import NewPostForm from "./components/NewPostForm";
import PostDetail from "./components/PostDetail";
import Footer from "./components/Footer";
// import { Router,Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "lightgreen" }}>
        <span style={{ background: "darkgreen" }}>Chameleon Blog</span>
      </h1>
      <main>
        <About />
        <Home />
        <NewPostForm />
        <PostDetail />
      </main>
      <Footer />
    </div>
  );
}

export default App;
