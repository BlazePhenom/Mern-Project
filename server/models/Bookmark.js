const mongoose = require('mongoose');

const BookmarkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
  },
  url: {
    type: String,
    required: [true, 'Please provide a URL'],
    match: [
      /^(https|http):\/\/[^\s$.?#].[^\s]*$/,
      'Please provide a valid URL',
    ],
  },
  description: {
    type: String,
    maxlength: 500,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, // This is the link
    ref: 'User', // To the 'User' model
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Bookmark', BookmarkSchema);