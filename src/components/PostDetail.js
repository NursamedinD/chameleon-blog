import React from 'react'
import { useParams } from 'react-router-dom';

function PostDetail({ posts }) {
  const { postId } = useParams();
  const post = posts.find(post => post.id === parseInt(postId));
  
  return (
    <div>
      <h2>Post Title</h2>
      <img src={post.image} alt={post.title} style={{ width: '200px' }} />
      <p>{post.content}</p>
    </div>
  )
}

export default PostDetail