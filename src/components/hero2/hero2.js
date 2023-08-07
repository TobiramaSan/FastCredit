// import React, { useState } from "react";
import circle1 from "../../assets/circle1hero2.png";
import circle2 from "../../assets/circle2hero2.png";
import Apple from "../../assets/apple.png";
import Google from "../../assets/google-play.png";
import tag from "../../assets/tag hero2.png";
import iphone from "../../assets/iPhone 12 hero2.png";
import "./hero2.css";
import Dot from "../../assets/Ellipse 316.png";

const Hero2 = () => {
  return (
    <div className="hero2-compo">
      <div className="comp-contain">
        <div className="texts">
          <div className="text-contain1">
            <p>Our simple and fast “all - purpose “ cash loans</p>
          </div>
          <div>
            <div className="text-contain2">
              <span>Features</span>
              <div className="list-text">
                <ul>
                  <li>
                    <img src={Dot} alt="" className="dot" />
                    <p className="small-texts">Our rates are very attractive</p>
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
        <div className="img">
          <img className="Iphone" src={iphone} alt="" />
          <img className="circle1" src={circle1} alt="" />
          <img className="circle2" src={circle2} alt="" />
          <img className="tag" src={tag} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
