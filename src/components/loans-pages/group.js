import React from "react";
import Dot from "../../assets/Ellipse 316.png";
import oval from "../../assets/oval.png";
import "./pages.css";
const Group = () => {
  return (
    <div className="group">
      <div className="hero2-comp-feat">
        <h1 className="green">Group Lending Scheme</h1>
        <p className="main">
          Our group lending scheme is designed as a welfare package for
          employees. Access up to 100 million Naira collectively in this loan
          package. With this scheme, employees have more liquidity to meet
          personal needs and satisfied employees can meet their financial
          obligations with increased focus on their jobs.
        </p>

        <h1 className="black">Features</h1>
        <div className="feat">
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>A welfare package for employees</p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>Salary advance or personal loans </p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>
              Access up to 100 million Naira under this group lending scheme
            </p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>
              Access up to 100 million Naira under this group lending scheme
            </p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>Flexible repayment plan</p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>12 - 15 months tenure</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
