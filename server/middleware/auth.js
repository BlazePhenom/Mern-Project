const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  let token;

  // 1. Check if the token is in the header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // 'Bearer <token>'
    token = req.headers.authorization.split(' ')[1];
  }

  // 2. Make sure token exists
  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized, no token' });
  }

  try {
    // 3. Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. Attach the user to the request object
    // This makes req.user available in any protected route
    req.user = await User.findById(decoded.id).select('-password');
    
    // 5. Continue to the next function (the route's controller)
    next();

  } catch (error) {
    return res.status(401).json({ success: false, message: 'Not authorized, token failed' });
  }
};