import React, { useState, useEffect } from 'react';
import './Profile.css';

const statesAndCities = {
  Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
  Karnataka: ['Bangalore', 'Mysore'],
  Delhi: ['New Delhi', 'Dwarka'],
};

const Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    state: '',
    city: '',
    bid: '',
    role: '',
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // --- Backend API endpoint for fetching user profile ---
        const apiEndpoint = 'http://localhost:5000/api/user/profile'; // Your backend endpoint

        // --- Retrieve JWT token from localStorage ---
        const token = localStorage.getItem('token'); // <-- Assuming your token key is 'token'

        // --- Add authentication headers ---
        const headers = {
          'Content-Type': 'application/json',
          // Add Authorization header with JWT token
          'Authorization': `Bearer ${token}`, // <-- Include the JWT token here
        };

        // --- Fetch user profile data from the backend ---
        const response = await fetch(apiEndpoint, {
          method: 'GET', // Use GET method as per common REST practices for fetching data
          headers: headers,
        });

        if (response.ok) {
          const responseData = await response.json(); // Parse the JSON response

          // --- Check if the backend returned the user object and set state ---
          // Backend returns { message: '...', user: { ... } }
          if (responseData.user) {
            setUserData(responseData.user); // Set the user data from the 'user' property
            // --- If your backend returns photo data/URL, set photoPreview here ---
            // if (responseData.user.profilePhotoUrl) {
            //   setPhotoPreview(responseData.user.profilePhotoUrl);
            // } else if (responseData.user.profilePhotoDataUrl) { // if backend sends base64 data
            //   setPhotoPreview(responseData.user.profilePhotoDataUrl);
            // }
          } else {
             // Handle unexpected response structure from backend
            console.error('Backend response did not contain user data:', responseData);
            // Optionally set an error state or redirect
          }

        } else {
          console.error('Failed to fetch user profile. Status:', response.status);
          // Handle authentication errors (e.g., token expired, unauthorized)
          if (response.status === 401 || response.status === 403) {
             console.log('Unauthorized or Forbidden: Redirecting to login');
             // Example: redirect to login page if using react-router-dom
             // navigate('/login');
          } else {
            // Handle other HTTP errors
            console.error('HTTP Error fetching user profile:', response.statusText);
          }
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        // Handle network errors or other exceptions
        // Optionally set an error state to display to the user
        // setError('Could not connect to the server to fetch profile.');
      }
    };

    fetchUserProfile(); // Call the fetch function when the component mounts

  }, []); // Empty dependency array means this effect runs once on mount

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setUserData((prev) => ({
      ...prev,
      state: selectedState,
      city: '',
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log('Updated Profile:', userData);
    alert('Profile updated successfully!');
  };

  return (
    <div className="dark-profile-container">
      <div className="dark-profile-card">
        <div className="left-section">
          <h3>{userData.name || 'Your Name'}</h3>
          <div className="form-row">
              <label>Bio</label>
              <textarea name="bio" value={userData.bio} onChange={handleChange} rows="3" />
            </div>
        </div>

        <div className="right-section">
          <form onSubmit={handleUpdate}>
            <div className="form-row">
              <label>Name</label>
              <input type="text" name="name" value={userData.name} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <label>Email</label>
              <input type="email" name="email" value={userData.email} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <label>Phone</label>
              <input type="text" name="phone" value={userData.phone} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <label>State</label>
              <select name="state" value={userData.state} onChange={handleStateChange} required>
                <option value="">Select State</option>
                {Object.keys(statesAndCities).map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <label>City</label>
              <select
                name="city"
                value={userData.city}
                onChange={handleChange}
                required
                disabled={!userData.state}
              >
                <option value="">Select City</option>
                {userData.state &&
                  statesAndCities[userData.state].map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
              </select>
            </div>

            {/* Conditionally render the bid field based on user role */}
            {userData.role === 'serviceProvider' && (
              <div className="form-row">
                <label>Set Your Bid (₹)</label>
                <input type="number" name="bid" value={userData.bid} onChange={handleChange} required />
              </div>
            )}

            <button type="submit" className="submit-btn">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
