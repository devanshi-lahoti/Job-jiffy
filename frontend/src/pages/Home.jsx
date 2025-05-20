import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './home.css';
import About from './About';
import ContactUs from './ContactUs';
import Footer from './Footer';

const SERVICE_CATEGORIES = [
  'plumbing',
  'electrical',
  'carpentry',
  'painting',
  'cleaning',
  'gardening'
];

const Home = () => {
  const [activeTab, setActiveTab] = useState('weProvide'); 
  const navigate = useNavigate();
  const [serviceProviders, setServiceProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchServiceProviders();
  }, []);

  const fetchServiceProviders = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/jobs', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        setServiceProviders(response.data.data);
      } else {
        console.log('Response data:', response.data);
        setError('Invalid data format received from server');
      }
    } catch (err) {
      console.error('Error fetching service providers:', err);
      if (err.response) {
        setError(`Error: ${err.response.data?.message || 'Failed to load service providers'}`);
      } else if (err.request) {
        setError('No response from server. Please check your connection.');
      } else {
        setError('An error occurred while fetching service providers');
      }
    } finally {
      setLoading(false);
    }
  };

  // Group service providers by service type
  const groupedProviders = serviceProviders.reduce((acc, provider) => {
    const type = provider.serviceType?.toLowerCase() || 'other';
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(provider);
    return acc;
  }, {});

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCategory(null);
  };

  // Get providers for a specific category
  const getProvidersForCategory = (category) => {
    return groupedProviders[category] || [];
  };

  const services = [
    { id: 1, name: 'Electrician', path: '/services/electrician' },
    { id: 2, name: 'Plumber', path: '/services/plumber' },
    { id: 3, name: 'Carpenter', path: '/services/carpenter' },
    { id: 4, name: 'Cleaner', path: '/services/cleaner' },
    { id: 5, name: 'Painter', path: '/services/painter' },
    { id: 6, name: 'Gardener', path: '/services/gardener' }
  ];

  return (
    <div className="app dark-theme">
      <nav className="navbar">
        <div className="logo">JOB<span>JIFFY</span></div>
        <ul className="nav-links">
          <li><a className="nav" href="#header">Home</a></li>
          <li><a className="nav" href="#about">About Us</a></li>
          <li><a className="nav" href="#header">Help</a></li>
          <li><a className="nav" href="#contact">Contact Us</a></li>
        </ul>
        <img
          src="data:image/png;base64,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" 
          alt="Profile"
          className="profile-icon"
          onClick={() => navigate('/profile')}
          style={{ width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }}
        />
      </nav>

      <header className="header" id="header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          HIRE EXPERT SERVICES
        </motion.h1>
      </header>

      <div className="tabs">
        <div
          className={`tab ${activeTab === 'whyWe' ? 'active' : ''}`}
          onClick={() => setActiveTab('whyWe')}
        >
          <a href="#about" className='active'>WHY WE?</a>
        </div>
        <div
          className={`tab ${activeTab === 'weProvide' ? 'active' : ''}`}
          onClick={() => setActiveTab('weProvide')}
        >
          WE PROVIDE
        </div>
        <div
          className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('reviews');
            navigate('/reviews');
          }}
        >
          REVIEWS
        </div>
      </div>

      <main className="services">
        {loading ? (
          <div className="loading">Loading services...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          <div className="services-container">
            <div className="categories-list">
              {SERVICE_CATEGORIES.map((category) => (
                <motion.div
                  key={category}
                  className="category-item"
                  onClick={() => handleCategoryClick(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </main>

      <AnimatePresence>
        {showModal && selectedCategory && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="close-button" onClick={closeModal}>×</button>
              <h2 className="modal-title">
                {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Services
              </h2>
              <div className="providers-grid">
                {getProvidersForCategory(selectedCategory).map((provider) => (
                  <motion.div 
                    key={provider._id} 
                    className="provider-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4>Name: {provider.name}</h4>
                    <p>Location: {provider.location}</p>
                    <p>Phone: {provider.phone}</p>
                    <p className="pricing">Price: {provider.pricing}</p>
                    <p className="description">Description: {provider.jobDescription}</p>
                    <button className="book-btn" onClick={() => navigate(`/services/${selectedCategory}/booking`)}>Book Now</button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div id="about">
        <About />
      </div>
      <div id="#contact">
        <ContactUs/>
      </div>
      <div id="footer">
        <Footer/>
      </div>
    </div>
  );
};

export default Home;