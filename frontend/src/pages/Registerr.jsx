import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './Registerr.css';

const Registerr = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show toast
    toast.success("✅ Sign-up successful!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "dark"
    });

    // Redirect after delay
    setTimeout(() => {
      navigate('/');
    }, 2200);
  };

  return (
    <div className="signup-provider-container">
      <ToastContainer />

      <div className="signup-header">
        <h2>Sign Up as Service Provider</h2>
        <p>Fill in the form to start offering your services on JobJiffy.</p>
      </div>

      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="service">Service Type</label>
          <select name="service" id="service" value={formData.service} onChange={handleChange} required>
            <option value="">Select your service</option>
            <option value="Plumber">Plumber</option>
            <option value="Electrician">Electrician</option>
            <option value="Carpenter">Carpenter</option>
            <option value="Washer">Washer</option>
            <option value="Tailor">Tailor</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="password">Create Password</label>
          <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default Registerr;
