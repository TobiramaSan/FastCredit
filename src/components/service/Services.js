import "./services.css";
import Clock from "../../assets/clock.png";
import Cube from "../../assets/3dcube.png";
import Story from "../../assets/story.png";
import Activity from "../../assets/activity.png";
import Status from "../../assets/status-up.png";

const Services = () => {
  return (
    <div className="services">
      <div className="service-cont">
        <div className="service-text-cont">
          <div className="service-text">
            <h1>Our Services</h1>
            <p>We Offer the best Services</p>
          </div>
        </div>

        <div className="main-grid">
          <div className="grid-1">
            <div className="grid-container">
              <div>
                <img src={Cube} alt="" />
              </div>
              <div className="cont-text">
                <span>Micro Credit</span>
                <p>
                  We provide micro credit to validly employed Nigeria workers on
                  payroll deducutible basis
                </p>
              </div>
            </div>
            <div className="grid-container">
              <div>
                <img src={Story} alt="" />
              </div>
              <div className="cont-text">
                <span>Products</span>
                <p>
                  We cover both private and public and public workers via
                  attractive products
                </p>
              </div>
            </div>
            <div className="grid-container">
              <div>
                <img src={Cube} alt="" />
              </div>
              <div className="cont-text">
                <span>Loans</span>
                <p>
                  Loans are processed and disbursed within 6 hours of duly
                  completed documentation
                </p>
              </div>
            </div>
          </div>
          <div className="grid-2">
            <div className="grid-container">
              <div>
                <img src={Clock} alt="" />
              </div>
              <div className="cont-text">
                <span>24/7</span>
                <p>
                  Have an online digital interaction with our outreach and
                  profile.
                </p>
              </div>
            </div>
            <div className="grid-container">
              <div>
                <img src={Activity} alt="" />
              </div>
              <div className="cont-text">
                <span>Investments</span>
                <p>Put your money to work while you earn great returns.</p>
              </div>
            </div>
            <div className="grid-container">
              <div>
                <img src={Status} alt="" />
              </div>
              <div className="cont-text">
                <span>Fintech</span>
                <p>
                  We will leverage on fintech to extend our outreach and profile
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
