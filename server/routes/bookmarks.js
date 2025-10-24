const express = require('express');
const router = express.Router();

// Import the controller functions
const {
  getBookmarks,
  getMyBookmarks,
  createBookmark,
  deleteBookmark
} = require('../controllers/bookmarks');

// Import the 'protect' middleware
const { protect } = require('../middleware/auth');

// --- Define the routes ---

// Public route to get all bookmarks
router.route('/').get(getBookmarks);

// Protected route to create a bookmark
router.route('/').post(protect, createBookmark);

// Protected route to get just the user's bookmarks
router.route('/mybookmarks').get(protect, getMyBookmarks);

// Protected route to delete a bookmark
router.route('/:id').delete(protect, deleteBookmark);

module.exports = router;