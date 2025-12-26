import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import logo from "../logo.svg";

const Home = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;

          setLocation(`Latitude: ${lat}, Longitude: ${lon}`);
        },
        (err) => {
          console.log(err);
          alert("Please allow location permission.");
        }
      );
    } else {
      alert("Geolocation not supported in this browser.");
    }
  };

  return (
    <div className="home-container">
      <img src={logo} alt="Raksha Logo" className="logo" />
      <h1 className="title">Raksha</h1>

      <button className="nav-button" onClick={handleLocation}>
        Get My Location
      </button>

      {location && <p className="location-text">{location}</p>}

      <button className="nav-button next" onClick={() => navigate("/next")}>
        Go to Next Page
      </button>
    </div>
  );
};

export default Home;
