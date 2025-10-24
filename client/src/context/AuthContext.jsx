// client/src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// 1. Create the Context
const AuthContext = createContext();

// 2. Create the Provider Component
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [isLoading, setIsLoading] = useState(false);

  // 3. Set token in localStorage and axios headers
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
      setIsAuthenticated(false);
    }
  }, [token]);

  // 4. Signup Function
  const signup = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await axios.post('https://mern-project-mbbs.onrender.com//api/auth/register', {
        email,
        password,
      });
      setToken(response.data.token);
    } catch (error) {
      console.error('Signup Error:', error.response.data.message);
    }
    setIsLoading(false);
  };

  // 5. Login Function
  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await axios.post('https://mern-project-mbbs.onrender.com//api/auth/login', {
        email,
        password,
      });
      setToken(response.data.token);
    } catch (error) {
      console.error('Login Error:', error.response.data.message);
    }
    setIsLoading(false);
  };

  // 6. Logout Function
  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated,
        isLoading,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 7. Export
export { AuthProvider, AuthContext };