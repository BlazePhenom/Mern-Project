// client/src/pages/DashboardPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookmarkForm from '../components/BookmarkForm.jsx';
import BookmarkItem from '../components/BookmarkItem.jsx';

const DashboardPage = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 1. Fetch user's bookmarks on page load
  useEffect(() => {
    const fetchMyBookmarks = async () => {
      try {
        // Token is already in headers
        const res = await axios.get('https://mern-project-mbbs.onrender.com//api/bookmarks/mybookmarks');
        setBookmarks(res.data.data);
      } catch (error) {
        console.error('Error fetching bookmarks:', error);
      }
      setIsLoading(false);
    };

    fetchMyBookmarks();
  }, []); // Empty array means this runs once on mount

  // 2. Handler function to add a new bookmark to the list
  const handleBookmarkAdded = (newBookmark) => {
    // Add new bookmark to the top of the list
    setBookmarks([newBookmark, ...bookmarks]);
  };

  // 3. Handler function to remove a bookmark from the list
  const handleBookmarkDeleted = (deletedBookmarkId) => {
    // Filter out the deleted bookmark
    setBookmarks(bookmarks.filter(bookmark => bookmark._id !== deletedBookmarkId));
  };

  if (isLoading) {
    return <div>Loading your bookmarks...</div>;
  }

  return (
    <div>
      <h2>Your Dashboard</h2>
      
      {/* Pass the handler function as a prop */}
      <BookmarkForm onBookmarkAdded={handleBookmarkAdded} />
      
      <div className="bookmarks-list" style={{ marginTop: '2rem' }}>
        <h3>My Bookmarks</h3>
        {bookmarks.length === 0 ? (
          <p>You haven't added any bookmarks yet.</p>
        ) : (
          bookmarks.map(bookmark => (
            <BookmarkItem 
              key={bookmark._id} 
              bookmark={bookmark} 
              onBookmarkDeleted={handleBookmarkDeleted} 
            />
          ))
        )}
      </div>
    </div>
  );
};

export default DashboardPage;