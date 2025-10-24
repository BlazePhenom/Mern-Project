// client/src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';

// Import Components
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute.jsx'; // 1. Import PrivateRoute

function App() {
  return (
    <div>
      <Navbar />
      
      <div className="container" style={{ maxWidth: '1100px', margin: '2rem auto', padding: '0 2rem' }}>
        <Routes>
          {/* --- Public Routes --- */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* --- Protected Route --- */}
          {/* 2. Wrap DashboardPage in a PrivateRoute element */}
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="" element={<DashboardPage />} />
          </Route>
          
        </Routes>
      </div>
    </div>
  );
}

export default App;