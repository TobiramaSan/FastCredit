import React, { useState } from "react";
import "./feature.css";
import Iphone from "../../assets/iPhone 12 Pro Max.png";
import Dot from "../../assets/Ellipse 316.png";
import investIphone from "../../assets/iPhone 12 Invest.png";
import buyIphone from "../../assets/iPhone 12 Buy.png";

const Features = () => {
  const [feature, setFeature] = useState("Loans");
  const [isMobileView, setIsMobileView] = useState(false);
  const handleView = () => {
    if (window.innerWidth <= 500) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleView);
    handleView();
    return () => {
      window.removeEventListener("resize", handleView);
    };
  }, []);

  const linksArray = [
    {
      type: "Loans",
      mainImage: Iphone,
      mainPara: "Our simple and fast “all - purpose “ cash loans",
      span: "Features",
      constImage: Dot,
      paraSmallOne: "Our rates are very attractive",
      paraSmallTwo: "No collateral needed",
      paraSmallThree: "Get credited in less than 24 hours",
    },
    {
      type: "Investment",
      mainImage: investIphone,
      mainPara: "Put your money to work while earning returns.",
      span: "Features",
      constImage: Dot,
      paraSmallOne: "Flexible interest rates up to 15%",
      paraSmallTwo: "No hidden charges",
      paraSmallThree: "Tenure ranges from 90 to 365 days",
    },
    {
      type: "Buy",
      mainImage: buyIphone,
      mainPara: "Access more products and pay in installments",
      span: "Features",
      constImage: Dot,
      paraSmallOne: " No hidden charges",
      paraSmallTwo: "No interest rates",
      paraSmallThree: "Fast delivery of products",
    },
  ];

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
              <p className="buy-text">
                {isMobileView ? "BNLP" : "Buy Now Pay Later"}
              </p>
            </li>
          </ul>
        </div>

        {linksArray.map((item, index) => {
          return (
            item.type === feature && (
              <div className="components" key={index}>
                <div className="comp-cont">
                  <div className="img">
                    <img src={item.mainImage} alt="" />
                  </div>
                  <div className="texts">
                    <div className="text-cont1">
                      <p>{item.mainPara}</p>
                    </div>
                    <div className="text-cont2">
                      <span>{item.span}</span>
                      <div className="list-text">
                        <ul>
                          <li>
                            <img src={item.constImage} alt="" className="dot" />
                            <p className="small-texts">{item.paraSmallOne}</p>
                          </li>
                          <li>
                            <img src={item.constImage} alt="" className="dot" />
                            <p className="small-texts">{item.paraSmallTwo}</p>
                          </li>
                          <li>
                            <img src={item.constImage} alt="" className="dot" />
                            <p className="small-texts">{item.paraSmallThree}</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Features;
