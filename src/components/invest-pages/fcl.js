import React from "react";
import Dot from "../../assets/Ellipse 316.png";
import oval from "../../assets/oval.png";
import "./invest.css";
const Fcl = () => {
  return (
    <div className="fcl">
      <div className="hero3-comp-feat">
        <h1 className="green">Fast Credit Investment Notes</h1>
        <p className="main">
          Customers are able to invest up to 100m in fixed deposit for
          themselves with the features below:
        </p>

        <h1 className="black">Features</h1>
        <div className="feat">
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>Start investing with minimum of N100,000</p>
          </div>
          <img src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>Minimum tenure of 90 days </p>
          </div>
          <img src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>No hidden charges on liquidation</p>
          </div>
          <img src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>
              Monthly, quarterly, bi-annually or upfront interest payment into
              your account ID
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fcl;
