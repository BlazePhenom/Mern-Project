// client/src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This fetches ALL bookmarks from our public route
    const fetchAllBookmarks = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/bookmarks');
        setBookmarks(res.data.data);
      } catch (error) {
        console.error('Error fetching bookmarks:', error);
      }
      setIsLoading(false);
    };

    fetchAllBookmarks();
  }, []);

  // Basic styling for the items
  const itemStyle = {
    background: '#fff',
    padding: '1.5rem',
    marginBottom: '1rem',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
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

  if (isLoading) {
    return <div>Loading public bookmarks...</div>;
  }

  return (
    <div>
      <h2>Public Bookmarks</h2>
      <p>See what other users are sharing!</p>
      
      <div className="bookmarks-list" style={{ marginTop: '2rem' }}>
        {bookmarks.length === 0 ? (
          <p>No public bookmarks have been added yet.</p>
        ) : (
          bookmarks.map(bookmark => (
            <div key={bookmark._id} style={itemStyle}>
              <h3 style={titleStyle}>{bookmark.title}</h3>
              <a href={bookmark.url} target="_blank" rel="noopener noreferrer" style={urlStyle}>
                {bookmark.url}
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;