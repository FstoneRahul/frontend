import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import api, { baseURL } from '../api.js';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get('token');
    if (tokenFromUrl) {
      localStorage.setItem('token', tokenFromUrl);
      window.history.replaceState({}, document.title, window.location.pathname); // Remove token from URL
    }
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // Verify token and get user
      api.get('/api/auth/user')
        .then(res => setUser(res.data))
        .catch(() => localStorage.removeItem('token'))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    const res = await api.post('/api/auth/login', { email, password });
    const { token } = res.data;
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // Get user data
    const userRes = await api.get('/api/auth/user');
    setUser(userRes.data);
  };

  const signup = async (name, email, password) => {
    const res = await api.post('/api/auth/signup', { name, email, password });
    const { token } = res.data;
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // Get user data
    const userRes = await api.get('/api/auth/user');
    setUser(userRes.data);
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  const socialLogin = (provider) => {
    window.location.href = `${baseURL}/api/auth/${provider}`;
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, socialLogin, loading }}>
      {children}
    </AuthContext.Provider>
  );
};