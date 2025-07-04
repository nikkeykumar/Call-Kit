import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
const HomePage = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate(`/room/${input}`);
  };
  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <h1 className="homepage-title">Welcome to Video Calling App</h1>
        <p className="homepage-subtitle">
          Start a video call with a randomly generated Room ID
        </p>
        <div className="room-id-container">
          <input
            type="text"
            className="room-id-input"
            placeholder="Generated Room ID"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="generate-button" onClick={submitHandler}>
            Generate
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;
