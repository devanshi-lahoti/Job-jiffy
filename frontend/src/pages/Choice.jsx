import React from "react";
import { useNavigate } from "react-router-dom";
import "./Choice.css";

const Choice = () => {
  const navigate = useNavigate();

  return (
    <div className="login-choice-container">
      <h2>Signup to <span className="highlight">JobJiffy</span></h2>
      <p>Select how you'd like to continue:</p>

      <div className="choice-buttons">
        <button onClick={() => navigate("/signup")}>SignUp as User</button>
        <button onClick={() => navigate("/register/provider")}>SignUp as Service Provider</button>
      </div>
    </div>
  );
};

export default Choice;
