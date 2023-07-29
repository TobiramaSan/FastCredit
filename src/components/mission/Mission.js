import Group from "../../assets/Group 33782.png";
import "./mission.css";
const Mission = () => {
  return (
    <div className="mission">
      <div className="mission-container">
        <div className="mission-img">
          <img src={Group} alt="" />
        </div>
        <div className="mission-text">
          <span>Our Mission</span>
          <div className="p-cont">
            <p>
              To provide fast and convenient financial services to consumers by
              redefining customer’s experience through product innovation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
