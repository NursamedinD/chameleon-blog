import React from 'react';
import { useState } from 'react';

function NewPostForm({ addNewPost }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')

  function handleSubmit(event) {
    event.preventDefault();
    addNewPost({ title, content, image });
    setTitle('');
    setContent('');
    setImage('');
  }

  return (
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
      value={image}
      onChange={(event) => setImage(event.target.value)}
      />
      <br></br>
      <button type="submit">Submit Post</button>

    </form>
  );
}

export default NewPostForm