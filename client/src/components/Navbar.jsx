// client/src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx'; // Make sure it's .jsx

const Navbar = () => {
  // Get auth state and logout function
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login after logout
  };

  // Define links for guests (logged out)
  const guestLinks = (
    <ul style={{ display: 'flex', listStyle: 'none', alignItems: 'center' }}>
      <li style={{ marginLeft: '1rem' }}>
        <Link to="/login" style={{ color: '#fff' }}>Login</Link>
      </li>
      <li style={{ marginLeft: '1rem' }}>
        <Link to="/signup" style={{ color: '#fff' }}>Signup</Link>
      </li>
    </ul>
  );

  // Define links for authenticated users (logged in)
  const authLinks = (
    <ul style={{ display: 'flex', listStyle: 'none', alignItems: 'center' }}>
      <li style={{ marginLeft: '1rem' }}>
        <Link to="/dashboard" style={{ color: '#fff' }}>Dashboard</Link>
      </li>
      <li style={{ marginLeft: '1rem' }}>
        <button onClick={handleLogout} style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
          Logout
        </button>
      </li>
    </ul>
  );

  return (
    <nav style={{ background: '#333', color: '#fff', padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
        <h1>BookMarked</h1>
      </Link>
      
      {/* Show the correct set of links */}
      {isAuthenticated ? authLinks : guestLinks}
      
    </nav>
  );
};

export default Navbar;