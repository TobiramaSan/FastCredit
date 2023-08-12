import React from "react";
import Dot from "../../assets/Ellipse 316.png";
import oval from "../../assets/oval.png";
import "./pages.css";
const Bnpl = () => {
  return (
    <div className="bnpl">
      <div className="hero2-comp-feat">
        <h1 className="green">Buy Now Pay Later</h1>
        <p className="main">
          We have merchants’ partnership that cuts across industries ranging
          from electronics and gadgets, solar energy, grocery, travel and
          healthcare to education. Essentially, we enable consumers make
          purchases across online/offline merchants and they pay in fixed
          instalments by providing them with instant access to credit at point
          of sale and also on credit cards. Our BNPL services are only available
          to those in the working-class category. Our customers are able to
          access whatever products they want and they have a choice to pay in
          instalments stretched over some months and without any initial down
          payment (equity).
        </p>

        <h1 className="black">Onboarding Steps are as follows;</h1>
        <div className="feat">
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>Download our app from play store or Appstore.</p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>Register account and create profile.</p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>
              Upload your Salary account bank statement and any other required
              documentation.
            </p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>
              Let’s review your application and get back to you in a few hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bnpl;
