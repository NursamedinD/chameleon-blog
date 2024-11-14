import React from 'react';
import { Link } from 'react-router-dom';

function Home({ posts }) {
  return (
    <div>
      <h2>New Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
              <img src={post.image} alt={post.title} style={{ width: '100px' }} />
              <p>{post.content.slice(0, 100)}... <strong>Read More</strong></p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home