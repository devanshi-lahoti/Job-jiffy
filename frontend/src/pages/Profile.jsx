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
    profilePhoto: null,
  });

  const [photoPreview, setPhotoPreview] = useState(null);

  useEffect(() => {
    const storedUser = {
      name: 'Disha Tiwari',
      email: 'disha@example.com',
      phone: '9876543210',
      bio: 'Experienced UI developer.',
      state: 'Maharashtra',
      city: 'Mumbai',
      bid: '500',
      profilePhoto: null,
    };
    setUserData(storedUser);
  }, []);

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

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserData((prev) => ({ ...prev, profilePhoto: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
          <div className="profile-pic">
            {photoPreview ? (
              <img src={photoPreview} alt="Profile" />
            ) : (
              <div className="placeholder">No Photo</div>
            )}
          </div>
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
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

            <div className="form-row">
              <label>Set Your Bid (₹)</label>
              <input type="number" name="bid" value={userData.bid} onChange={handleChange} required />
            </div>

            <button type="submit" className="submit-btn">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
