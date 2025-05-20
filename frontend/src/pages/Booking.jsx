import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './BookService.css';
import axios from 'axios';

const BookService = () => {
  const { serviceType } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send booking data to the backend
      const response = await axios.post(`http://localhost:5000/api/book/${serviceType}`, formData);

      if (response.data.success) {
        // Show success toast on successful backend response
        toast.success("🎉 Booking confirmed!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "dark"
        });

        // Optional redirect after short delay
        setTimeout(() => {
          navigate('/');
        }, 2200);

      } else {
        // Handle backend-specific errors if 'success' is false but no exception was thrown
        toast.error(response.data.message || 'Booking failed.', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "dark"
        });
      }

    } catch (err) {
      // Handle network errors or errors from the backend (e.g., 400, 500 status codes)
      console.error('Booking submission error:', err);
      toast.error(err.response?.data?.message || 'An error occurred during booking.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "dark"
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="booking-form-container">
      <ToastContainer />
      
      <div className="booking-header">
        <h2>Book a {serviceType}</h2>
        <p>Fill out the form to book a professional {serviceType} service.</p>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="date">Preferred Date</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="time">Preferred Time</label>
          <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Additional Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
        </div>

        <button type="submit" className="submit-btn">Book Now</button>
      </form>
    </div>
  );
};

export default BookService;
