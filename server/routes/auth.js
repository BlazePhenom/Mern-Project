const express = require('express');
const router = express.Router();

// Import our functions from the controllers file
const { register, login } = require('../controllers/auth');

// @desc    Register a new user
// @route   POST /api/auth/register
router.post('/register', register); // This is now uncommented

// @desc    Login a user
// @route   POST /api/auth/login
router.post('/login', login); // This is now uncommented

module.exports = router;