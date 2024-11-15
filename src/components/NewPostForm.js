import React from 'react';
import { useState } from 'react';

function NewPostForm({ addNewPost }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  function handleSubmit(event) {
    event.preventDefault();
    addNewPost({ title, content, imageUrl });
    setTitle('');
    setContent('');
    setImageUrl('');
  }

  return (
    <div className="form">
      <h2>Create a New post</h2>
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