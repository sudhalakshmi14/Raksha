import { useNavigate } from "react-router-dom";
import CardContainer from "../components/CardContainer";
import "../styles/card.css";
import "../styles/sosflow.css";

export default function SOSMain() {
  const navigate = useNavigate();

  return (
    <CardContainer>
      <div className="sos-card-center">
        <h2>Tap SOS</h2>

        <div
          className="sos-animated-button"
          onClick={() => navigate("/select-service")}
        >
          SOS
        </div>
      </div>
    </CardContainer>
  );
}
