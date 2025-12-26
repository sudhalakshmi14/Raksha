import { useState } from "react";
import "../styles/ServiceSelect.css";

export default function ServiceSelect() {
  const [selected, setSelected] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSelect = (service) => {
    setSelected(service);
    setShowPopup(true);

    // Auto close popup after 2.5 sec (optional)
    setTimeout(() => setShowPopup(false), 2500);
  };

  return (
    <div className="service-wrapper">
      <div className="service-card">

        <h1>Select Emergency Service</h1>

        <div className="service-btn ambulance" onClick={() => handleSelect("Ambulance")}>🚑 Ambulance</div>

        <div className="service-btn police" onClick={() => handleSelect("Police")}>👮 Police</div>

        <div className="service-btn fire" onClick={() => handleSelect("Fire Engine")}>🔥 Fire Engine</div>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <div className="popup-icon">✅</div>
            <h3>Help is on the way!</h3>
            <p>{selected} team has been notified.</p>

            <button onClick={() => setShowPopup(false)} className="popup-btn">
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
