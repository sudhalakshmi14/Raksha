import "../styles/splash.css";
import { useNavigate } from "react-router-dom";
import WomenLogo from "../assets/women-logo.png";

export default function Splash() {
  const navigate = useNavigate();

  return (
    <div className="splash-wrapper">
      <div className="splash-card">

        {/* LOGO HERE */}
        <img
          src={WomenLogo}
          alt="RakshaAlert Logo"
          className="welcome-logo"
        />

        <h1>RakshaAlert</h1>

        <p className="tagline">
          Your personal safety companion, always by your side.
        </p>

        <ul className="features">
          <li>✔ Instant SOS alerts</li>
          <li>✔ Live location sharing</li>
          <li>✔ Emergency contacts notified</li>
        </ul>

        <button className="primary-btn" onClick={() => navigate("/welcome")}>
          Get Started
        </button>

        <button className="text-btn">How it works</button>
      </div>
    </div>
  );
}
