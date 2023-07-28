import "./services.css";
import Clock from "../../assets/clock.png";
import Cube from "../../assets/3dcube.png";
import Story from "../../assets/story.png";
import Activity from "../../assets/activity.png";
import Status from "../../assets/status-up.png";

const Services = () => {
  return (
    <div className="services">
      {/* <img className="rectangle" src={Rectangle} alt="" /> */}
      {/* <img src="" alt="" /> */}
      <div className="service-container">
        <h1>Our Services</h1>
        <p>We Offer the best Services</p>
      </div>
      <div className="grid">
        <div className="grid-container">
          <div>
            <img src={Cube} alt="" />
          </div>
          <span>Micro Credit</span>
          <p>
            We provide micro credit to validly employed Nigeria workers on
            payroll deducutible basis
          </p>
        </div>
        <div className="grid-container">
          <div>
            <img src={Story} alt="" />
          </div>
          <span>Products</span>
          <p>
            We cover both private and public and public workers via attractive
            products
          </p>
        </div>
        <div className="grid-container">
          <div>
            <img src={Cube} alt="" />
          </div>
          <span>Loans</span>
          <p>
            Loans are processed and disbursed within 6 hours of duly completed
            documentation
          </p>
        </div>
        <div className="grid-container">
          <div>
            <img src={Clock} alt="" />
          </div>
          <span>24/7</span>
          <p>
            Have an online digital interaction with our outreach and profile.
          </p>
        </div>
        <div className="grid-container">
          <div>
            <img src={Activity} alt="" />
          </div>
          <span>Investments</span>
          <p>Put your money to work while you earn great returns.</p>
        </div>
        <div className="grid-container">
          <div>
            <img src={Status} alt="" />
          </div>
          <span>Fintech</span>
          <p>We will leverage on fintech to extend our outreach and profile</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
