// client/src/pages/SignupPage.jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Get the signup function from our context
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      // If signup is successful, navigate to the dashboard
      navigate('/dashboard'); 
    } catch (err) {
      console.error('Failed to sign up');
    }
  };

  // Re-using the same styles
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '2rem auto',
  };
  const inputStyle = {
    padding: '0.5rem',
    marginBottom: '1rem',
    fontSize: '1rem',
  };
  const buttonStyle = {
    padding: '0.7rem',
    fontSize: '1rem',
    background: '#28a745',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength="6"
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;