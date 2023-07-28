import Woman from "../../assets/African Woman  1.png";
import Coin from "../../assets/coins.png";
import Components1 from "../../assets/Component 49.png";
import Components2 from "../../assets/Component 85.png";
import Components3 from "../../assets/Component 50.png";
import CBN from "../../assets/image 1.png";
import Line from "../../assets/Line 4.png";
import NDIC from "../../assets/image 3.png";
import Apple from "../../assets/apple.png";
import Google from "../../assets/google-play.png";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="hero-text-cont">
          <div className="hero-text">
            <h1>Seamless, fast, and efficient Banking Experience </h1>
            <p>Fast credit is the best finance for you</p>
          </div>
          <div className="hero-license">
            <div className="license">
              <p>Licensed by CBN</p>
              <img src={CBN} alt="" />
            </div>
            <div className="line">
              <img src={Line} alt="" />
            </div>
            <div className="ndic">
              <p>Deposits insured by</p>
              <img src={NDIC} alt="" />
            </div>
          </div>

          <div className="buttons">
            <div className="button">
              <img src={Apple} alt="" />
              <div>
                <p>Download on the</p>
                <span>App Store</span>
              </div>
            </div>
            <div className="button">
              <img src={Google} alt="" />
              <div>
                <p>Get it on</p>
                <span>Google Play</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-img-cont">
          <img className="woman" src={Woman} alt="" />
          <img src={Coin} alt="coin" className="coins" />
          <img src={Components1} alt="component" className="component-one" />
          <img src={Components2} alt="component" className="component-two" />
          <img src={Components3} alt="component" className="component-three" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
