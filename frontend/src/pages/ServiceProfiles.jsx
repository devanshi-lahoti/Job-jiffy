import { useParams } from "react-router-dom";
import allData from "../data/serviceData.js";
import "./ServiceProfiles.css";
import { useNavigate } from "react-router-dom";

const ServiceProfiles = () => {
  const { serviceType } = useParams(); 
  const profiles = allData[serviceType] || [];
  const navigate = useNavigate();
  return (
    <div className="pro-list">
      <h2>{serviceType.toUpperCase()} PROFILES</h2>
      <div className="pro-cards">
        {profiles.map((pro) => (
          <div
            className={`pro-card`}
            key={pro.id}
          >
            <img src={pro.image} alt={pro.name} className="pro-img" />
            <div className="pro-info">
              <h3>{pro.name}</h3>
              <p><strong>Experience:</strong> {pro.experience}</p>
              <p><strong>Location:</strong> {pro.location}</p>
              <p><strong>Rating:</strong> ⭐ {pro.rating}</p>
              <p className="pro-desc">{pro.description}</p>
              <button className="book-btn" onClick={() => navigate(`/services/${serviceType}/booking`)}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceProfiles;
