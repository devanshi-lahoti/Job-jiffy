import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';  // Importing custom CSS

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user', // Default role
    location: '',
    pricing: '',
    jobDescription: '',
    serviceType: '', // New field for service type
    phone: '' // Add phone field
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
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        setLoading(false);
        return;
      }

      let response;
      
      if (formData.role === 'user') {
        // For regular users
        const userData = {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role
        };
        response = await axios.post('http://localhost:5000/api/auth/user/signup', userData);
      } else {
        // For service providers
        const serviceProviderData = {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
          location: formData.location,
          pricing: formData.pricing,
          jobDescription: formData.jobDescription,
          serviceType: formData.serviceType,
          phone: formData.phone // Include phone number
        };
        response = await axios.post('http://localhost:5000/api/auth/provider/signup', serviceProviderData);
      }
      
      if (response.data.success) {
        // Redirect to login page after successful signup
        navigate('/login');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred during signup');
    } finally {
      setLoading(false);
    }
  };

  const isServiceProvider = formData.role === 'service_provider';

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>

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

        {isServiceProvider && (
          <div className="service-provider-fields">
            <div className="form-group">
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="role-select"
              >
                <option value="">Select Service Type</option>
                <option value="plumbing">Plumbing</option>
                <option value="electrical">Electrical</option>
                <option value="carpentry">Carpentry</option>
                <option value="painting">Painting</option>
                <option value="cleaning">Cleaning</option>
                <option value="gardening">Gardening</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Your Location"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="pricing"
                value={formData.pricing}
                onChange={handleChange}
                placeholder="Your Pricing (e.g., $50/hour)"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleChange}
                placeholder="Describe your services and expertise"
                required
                className="job-description"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
            </div>
          </div>
        )}

        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
      <div className="login-link">
        <p>Already have an account? <a onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>Login</a></p>
      </div>
    </div>
  );
};

export default Signup;
