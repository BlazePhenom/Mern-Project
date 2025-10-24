// client/src/components/BookmarkForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

// We'll pass in a function from the dashboard to refresh the list
const BookmarkForm = ({ onBookmarkAdded }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // The token is already in axios headers (from AuthContext)
      const res = await axios.post('https://mern-project-mbbs.onrender.com//api/bookmarks', {
        title,
        url,
        description,
      });

      // Clear the form
      setTitle('');
      setUrl('');
      setDescription('');
      
      // Call the refresh function
      onBookmarkAdded(res.data.data); 

    } catch (error) {
      console.error('Error creating bookmark:', error.response.data.message);
    }
  };

  // Basic styling
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: '2rem auto',
    padding: '1.5rem',
    background: '#fff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  };
  const inputStyle = {
    padding: '0.5rem',
    marginBottom: '1rem',
    fontSize: '1rem',
  };
  const buttonStyle = {
    padding: '0.7rem',
    fontSize: '1rem',
    background: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h3>Add a New Bookmark</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={inputStyle}
      />
      <input
        type="url"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        style={inputStyle}
      />
      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{...inputStyle, minHeight: '80px'}}
      />
      <button type="submit" style={buttonStyle}>Add Bookmark</button>
    </form>
  );
};

export default BookmarkForm;