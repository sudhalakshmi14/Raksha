<div className="options">
  <button
    className={`service-btn ambulance ${selected === "Ambulance" ? "active" : ""}`}
    onClick={() => setSelected("Ambulance")}
  >
    🚑 Ambulance
  </button>

  <button
    className={`service-btn police ${selected === "Police" ? "active" : ""}`}
    onClick={() => setSelected("Police")}
  >
    👮 Police
  </button>

  <button
    className={`service-btn fire ${selected === "Fire" ? "active" : ""}`}
    onClick={() => setSelected("Fire")}
  >
    🔥 Fire Engine
  </button>
</div>
