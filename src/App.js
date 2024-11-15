import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import NewPostForm from "./components/NewPostForm";
import PostDetail from "./components/PostDetail";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState ([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
    .then(response => response.json())
    .then(data => setPosts(data))
  }, [])

  function addNewPost(post) {
    setPosts([...posts, { ...post, id: posts.length + 1 }]);
  }

  return (
    <Router>
          <div className="app">
      <Header />
      <h1 style={{ textAlign: "center", color: "lightgreen",  }}>
        <span style={{ background: "darkgreen" }}>Chameleon Blog</span>
      </h1>
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/post/:postId" element={<PostDetail posts={posts} />} />
        <Route path="/new" element={<NewPostForm addNewPost={addNewPost} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
