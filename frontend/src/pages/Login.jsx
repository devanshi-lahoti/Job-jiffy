import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // CSS file import

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user' // Default role
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let response;
      
      // Choose endpoint based on role
      if (formData.role === 'user') {
        response = await axios.post('http://localhost:5000/api/auth/user/login', formData);
      } else {
        response = await axios.post('http://localhost:5000/api/auth/provider/login', formData);
      }
      
      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);
      // Store user role
      localStorage.setItem('userRole', response.data.role);
      
      // Redirect based on role
      if (formData.role === 'service_provider') {
        navigate('/profile');
      } else {
        navigate('/');
      }
    } catch (err) {
      if (err.response?.status === 404) {
        setError('User does not exist. Please sign up first.');
      } else if (err.response?.status === 401) {
        setError('Invalid password. Please try again.');
      } else {
        setError(err.response?.data?.message || 'An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-header-container">
      <div className="form-box">
        <div className="form-content">
          {/* Text Section */}
          <div className="form-text">
            <h1>
              Find Your Dream <span className="highlight-yellow">Job</span> with <span className="highlight-orange">JobJiffy</span>
            </h1>
            <p>Explore verified jobs, connect with employers, and get hired with ease.</p>
          </div>

          {/* Form Section */}
          <div className="form-card">
            <h2>Login to JobJiffy</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="role-select"
                >
                  <option value="user">User</option>
                  <option value="service_provider">Service Provider</option>
                </select>
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>

            <p className="signup-text">
              Don't have an account? <a onClick={() => navigate('/signup')} className="signup-link">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
