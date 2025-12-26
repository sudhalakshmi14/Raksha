import { useNavigate } from "react-router-dom";
import WomenLogo from "../assets/women-logo.png";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="page center light-bg">
      <div className="card">

        {/* LOGO */}
        <img
          src={WomenLogo}
          alt="RakshaAlert Logo"
          className="welcome-logo"
        />

        <h2>Welcome to</h2>
        <h1 className="brand">RakshaAlert</h1>
        <p className="subtitle">Your personal safety companion.</p>

        <button onClick={() => navigate("/login")}>Login</button>

        <button className="secondary" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
