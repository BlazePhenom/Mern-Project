const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// ----- Register Function -----
exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already in use' });
    }

    // 2. Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3. Create new user in database
    const user = await User.create({
      email,
      password: hashedPassword,
    });

    // 4. Create a JWT Token
    const token = jwt.sign(
      { id: user._id },  // This is the "payload"
      process.env.JWT_SECRET, // From your .env file
      { expiresIn: '1d' } // Token expires in 1 day
    );

    // 5. Send token back to the client
    res.status(201).json({ success: true, token });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// ----- Login Function -----
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1. Check if user exists (by email)
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // 2. Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // 3. Create a JWT Token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // 4. Send token back to the client
    res.status(200).json({ success: true, token });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};