import React from 'react';
import { useParams } from 'react-router-dom';

function PostDetail({ posts }) {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === parseInt(postId));

  if (!post) {
    return <p>Post not found. Please check the URL or go back to the home page.</p>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <img src={post.imageUrl} alt={post.title} style={{ width: '200px' }} />
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;