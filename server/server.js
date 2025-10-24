const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './.env' });

// Connect to database
connectDB();

// Import route files
const authRoutes = require('./routes/auth');
const bookmarkRoutes = require('./routes/bookmarks'); // --- NEW LINE ---

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Test Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Mount our routers
app.use('/api/auth', authRoutes);
app.use('/api/bookmarks', bookmarkRoutes); // --- NEW LINE ---

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));