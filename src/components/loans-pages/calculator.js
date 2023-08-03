import React from "react";
import "./calculator.css";
import naira from "../../assets/naira.png";
import arrow from "../../assets/arrow-down.png";
import green from "../../assets/green naira.png";
import cancel from "../../assets/close-square.png";
const Calculator = () => {
  return (
    <div className="calculator">
      <div className="calc-main">
        <img className="cancel" src={cancel} alt="" />
        <h1>Loan Calculator</h1>
        <div className="calc-content">
          <div className="input">
            <div className="amount">
              <span>Amount</span>
              <div className="naira-input">
                <img src={naira} alt="" />
              </div>
            </div>
            <div className="amount">
              <span>Tenure of Loan</span>
              <div className="arrow-input">
                <p>Select here</p>
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className="double">
              <div className="double-input">
                <span>Interest Amount</span>
                <div>
                  <img src={green} alt="" />
                  <p>0</p>
                </div>
              </div>
              <div className="double-input">
                <span>Interest Rate</span>

                <p>10%</p>
              </div>
            </div>
            <div className="industry">
              <span>Industry Type</span>
              <div className="arrow-input">
                <p>Select here</p>
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
          <button>Calculate</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
