import "./feature.css";
import Iphone from "../../assets/iPhone 12 Pro Max.png";
import Dot from "../../assets/Ellipse 316.png";
import { useState } from "react";
const Features = () => {
  const [feature, setFeature] = useState("Loans");
  return (
    <div className="feature">
      <div className="feature-wrapper">
        <div className="feature-text">
          <span>Features</span>
          <p>The Platform you will personally love</p>
        </div>
        <div className="feature-links">
          <ul>
            <li
              className="loans"
              onClick={() => {
                setFeature("Loans");
              }}
            >
              <p>Loans</p>
            </li>
            <li
              className="investment"
              onClick={() => {
                setFeature("Investment");
              }}
            >
              <p>Investments</p>
            </li>
            <li
              className="buy"
              onClick={() => {
                setFeature("Buy");
              }}
            >
              <p>Buy Now Pay Later</p>
            </li>
          </ul>
        </div>
        {feature === "Loans" ? (
          <div className="components">
            <div className="comp-cont">
              <div className="img">
                <img src={Iphone} alt="" />
              </div>
              <div className="texts">
                <div className="text-cont1">
                  <p>Our simple and fast “all - purpose “ cash loans</p>
                </div>
                <div>
                  <div className="text-cont2">
                    <span>Features</span>
                    <div className="list-text">
                      <ul>
                        <li>
                          <img src={Dot} alt="" className="dot" />
                          <p className="small-texts">
                            Our rates are very attractive
                          </p>
                        </li>
                        <li>
                          <img src={Dot} alt="" className="dot" />
                          <p className="small-texts">No collateral needed</p>
                        </li>
                        <li>
                          <img src={Dot} alt="" className="dot" />
                          <p className="small-texts">
                            Get Credited in less than 24 hours
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : feature === "Investment" ? (
          <p>Investment</p>
        ) : feature === "Buy" ? (
          <p>Buy Now Pay Later</p>
        ) : null}
      </div>
    </div>
  );
};

export default Features;
