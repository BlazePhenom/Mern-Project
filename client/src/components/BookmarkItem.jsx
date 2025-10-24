// client/src/components/BookmarkItem.jsx
import React from 'react';
import axios from 'axios';

const BookmarkItem = ({ bookmark, onBookmarkDeleted }) => {
  
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this?')) {
      try {
        await axios.delete(`https://mern-project-mbbs.onrender.com//api/bookmarks${bookmark._id}`);
        // Call the parent's delete function to update state
        onBookmarkDeleted(bookmark._id); 
      } catch (error) {
        console.error('Error deleting bookmark:', error.response.data.message);
      }
    }
  };

  // Basic styling
  const itemStyle = {
    background: '#fff',
    padding: '1.5rem',
    marginBottom: '1rem',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  const titleStyle = {
    color: '#333',
    margin: '0 0 0.5rem 0',
  };
  const urlStyle = {
    color: '#007bff',
    textDecoration: 'none',
    fontSize: '0.9rem',
    display: 'block',
    marginBottom: '0.5rem'
  };
  const descStyle = {
    color: '#555',
    margin: '0',
  };
   const deleteBtnStyle = {
    background: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '0.5rem 0.75rem',
    cursor: 'pointer',
    borderRadius: '4px',
  };

  return (
    <div style={itemStyle}>
      <div>
        <h3 style={titleStyle}>{bookmark.title}</h3>
        <a href={bookmark.url} target="_blank" rel="noopener noreferrer" style={urlStyle}>
          {bookmark.url}
        </a>
        <p style={descStyle}>{bookmark.description}</p>
      </div>
      <button onClick={handleDelete} style={deleteBtnStyle}>Delete</button>
    </div>
  );
};

export default BookmarkItem;