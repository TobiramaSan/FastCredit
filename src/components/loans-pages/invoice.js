import React from "react";
import Dot from "../../assets/Ellipse 316.png";
import oval from "../../assets/oval.png";
import "./pages.css";
const Invoice = () => {
  return (
    <div className="invoice">
      <div className="hero2-comp-feat">
        <h1 className="green">Invoice Discounting</h1>
        <p className="main">
          Get quick funds to boost your business with FCL Invoice Discounting
          product.
        </p>

        <h1 className="black">Features</h1>
        <div className="feat">
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>Get up to 70% value of your confirmed invoice.</p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>Access up to 50 million Naira under this scheme </p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>Low interest rate</p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>Maximum tenure of 120 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
