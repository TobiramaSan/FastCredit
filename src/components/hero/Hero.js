import Woman from "../../assets/African Woman  1.png";
import Coin12 from "../../assets/image 12.png";
import Coin13 from "../../assets/image 13.png";
import Coin9 from "../../assets/image 9.png";
import Components1 from "../../assets/Component 49.png";
import Components2 from "../../assets/Component 85.png";
import Components3 from "../../assets/Component 50.png";
import CBN from "../../assets/image 1.png";
import Map from "../../assets/map.png";
import Line from "../../assets/Line 4.png";
import NDIC from "../../assets/image 3.png";
import Apple from "../../assets/apple.png";
import Google from "../../assets/google-play.png";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Seamless, fast, and efficient Banking Experience </h1>
          <p>Fast credit is the best finance for you</p>
        </div>
        <div className="images">
          <img className="woman" src={Woman} alt="" />
        </div>
      </div>
      <div>
        <img className="map" src={Map} alt="" />
      </div>
      <div>
        <img className="coin coin9" src={Coin9} alt="" />
        <img className="coin coin13" src={Coin13} alt="" />
        <img className="coin coin12" src={Coin12} alt="" />
        <img className="components img1" src={Components1} alt="" />
        <img className="components img2" src={Components2} alt="" />
        <img className="components img3" src={Components3} alt="" />
      </div>
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

      <div className="buttons">
        <a className="button1" href="/">
          <img src={Apple} alt="" />
          <div>
            <p>Download on the</p>
            <span>App Store</span>
          </div>
        </a>
        <a className="button2" href="/">
          <img src={Google} alt="" />
          <div>
            <p>Get it on</p>
            <span>Google Play</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
