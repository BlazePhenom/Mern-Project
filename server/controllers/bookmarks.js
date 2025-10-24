const Bookmark = require('../models/Bookmark');

// @desc    Get all bookmarks (public)
// @route   GET /api/bookmarks
exports.getBookmarks = async (req, res, next) => {
  try {
    // Get all bookmarks, sort by newest
    const bookmarks = await Bookmark.find().sort({ createdAt: -1 });

    res.status(200).json({ success: true, count: bookmarks.length, data: bookmarks });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all bookmarks for a specific user (protected)
// @route   GET /api/bookmarks/mybookmarks
exports.getMyBookmarks = async (req, res, next) => {
  try {
    // We get req.user.id from our 'protect' middleware
    const bookmarks = await Bookmark.find({ user: req.user.id }).sort({ createdAt: -1 });
    
    res.status(200).json({ success: true, count: bookmarks.length, data: bookmarks });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create a new bookmark (protected)
// @route   POST /api/bookmarks
exports.createBookmark = async (req, res, next) => {
  try {
    // Get data from the request body
    const { title, url, description } = req.body;
    
    // Add the user ID (from middleware) to the new bookmark data
    const bookmark = await Bookmark.create({
      title,
      url,
      description,
      user: req.user.id 
    });

    res.status(201).json({ success: true, data: bookmark });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete a bookmark (protected)
// @route   DELETE /api/bookmarks/:id
exports.deleteBookmark = async (req, res, next) => {
  try {
    const bookmark = await Bookmark.findById(req.params.id);

    // 1. Check if the bookmark exists
    if (!bookmark) {
      return res.status(404).json({ success: false, message: 'Bookmark not found' });
    }

    // 2. Check if the logged-in user is the owner
    //    We must convert the user ID (an object) to a string to compare
    if (bookmark.user.toString() !== req.user.id) {
      return res.status(401).json({ success: false, message: 'Not authorized to delete this' });
    }

    // 3. If all checks pass, remove it
    await bookmark.deleteOne(); // Use deleteOne() instead of remove()

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};