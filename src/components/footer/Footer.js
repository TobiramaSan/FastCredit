import "./footer.css";
import CBN from "../../assets/image 1.png";
import Line from "../../assets/Line 4.png";
import NDIC from "../../assets/image 3.png";
import Apple from "../../assets/apple.png";
import Google from "../../assets/google-play.png";
import iphone from "../../assets/iphone.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-text-cont">
          <p>Access simple, secure & reliable financial solutions now!!!</p>
        </div>
        <div className="img-text">
          <div className="image-cont">
            <img src={iphone} alt="" />
          </div>
          <div className="text-cont">
            <div className="para">
              <p>
                Download the Fast Credit App and get signed up in a few minutes
              </p>
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
        </div>

        <div className="description">
          <div className="foot-footer">
            <div className="d4-flex">
              <div>
                <span>Our Products</span>
                <ul>
                  <li>Payments</li>
                  <li>Loans</li>
                  <li>Investments</li>
                </ul>
              </div>
              <div>
                <span>About Fast Credit</span>
                <ul>
                  <li>Community</li>
                  <li>Careers</li>
                  <li>FAQ</li>
                </ul>
              </div>
              <div>
                <span>Our Policies</span>
                <ul>
                  <li>Terms and Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Sitemap</li>
                </ul>
              </div>
              <div>
                <span>Locations</span>
                <ul>
                  <li>NGR</li>
                  <li>US</li>
                  <li>UK</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="socials">
            <div>
              <span>@fastcreditltd</span>
            </div>
            <div className="social-logo">
              <img src={instagram} alt="" />
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
