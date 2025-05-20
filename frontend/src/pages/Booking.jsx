import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './BookService.css';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show toast notification
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
