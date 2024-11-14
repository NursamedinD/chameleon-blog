import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
        <nav>
          <ul>
            <button><Link to="/">Home</Link></button>
            <button><Link to="new">New Post</Link></button>
            <button><Link to="/about">About</Link></button>
          </ul>
        </nav>
    </header>
  )
}

export default Header