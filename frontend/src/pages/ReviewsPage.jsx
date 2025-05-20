import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ReviewsPage.css'; // We will create this CSS file next
import './home.css'; // Import Home.css for navbar styles

const staticReviews = [
  { id: 1, name: 'Alice Smith', review: 'JobJiffy helped me find a fantastic plumber quickly. Very satisfied!' },
  { id: 2, name: 'Bob Johnson', review: 'Great platform for finding local services. Easy to use.' },
  { id: 3, name: 'Charlie Brown', review: 'Found a skilled carpenter for my project. Highly recommend.' },
];

const ReviewsPage = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="app dark-theme"> {/* Use the app container and dark theme class */} 
      <nav className="navbar">
        <div className="logo">JOB<span>JIFFY</span></div>
        <ul className="nav-links">
          <li><a className="nav" href="#header" onClick={() => navigate('/')}>Home</a></li> {/* Update Home link */} 
          <li><a className="nav" href="#about" onClick={() => navigate('/#about')}>About Us</a></li> {/* Update About link */} 
          <li><a className="nav" href="#header" onClick={() => navigate('/')}>Help</a></li> {/* Update Help link (assuming it goes to Home) */} 
          <li><a className="nav" href="#contact" onClick={() => navigate('/#contact')}>Contact Us</a></li> {/* Update Contact link */} 
          <li><a className="nav" href="#reviews" onClick={() => navigate('/reviews')}>Reviews</a></li> {/* Update Reviews link */} 
        </ul>
      </nav>

      {/* The rest of the ReviewsPage content will go here */}
      <div className="reviews-page-container"> {/* Use a different container class if needed */} 
        <h2>Customer Reviews</h2>
        <div className="reviews-list">
          {staticReviews.map(review => (
            <div key={review.id} className="review-item">
              <p className="review-text">"{review.review}"</p>
              <p className="reviewer-name">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ReviewsPage;
