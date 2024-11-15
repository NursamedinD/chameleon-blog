import React from 'react';
import { useState } from 'react';

function NewPostForm({ addNewPost }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      title,
      content,
      imageUrl
    };
    addNewPost({ newPost });
    setTitle('');
    setContent('');
    setImageUrl('');
  };



  return (
    <div className="form">
      <h2>Create a New Post</h2>
    <form onSubmit={handleSubmit}> 
      <input
      type="type"
      placeholder="Title"
      value={title}
      onChange={(event) => setTitle(event.target.value)}
      />
      <br></br>
      <textarea
      placeholder="Content"
      value={content}
      onChange={(event) => setContent(event.target.value)}
      />
      <br></br>
      <input
      type="type"
      placeholder="Image Url"
      value={imageUrl}
      onChange={(event) => setImageUrl(event.target.value)}
      />
      <br></br>
      <button type="submit">Submit Post</button>

    </form>
    </div>
  );
}

export default NewPostForm