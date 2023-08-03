import React from "react";
import { NavLink } from "react-router-dom";
import FCL from "../../assets/FCL.png";
import kids from "../../assets/kiddies.png";
import target from "../../assets/target.png";
import "./invest.css";

const InvestDrop = () => {
  return (
    <div className="invest-drop">
      <div className="drop-cont">
        <NavLink className="navlink">
          <img src={target} alt="" />
          <div>
            <span>Target Savings</span>
            <p>Save daily, weekly or monthly to achieve target goals</p>
          </div>
        </NavLink>
        <NavLink className="navlink">
          <img src={kids} alt="" />
          <div>
            <span>Kiddies Swag</span>
            <p>Invest in your child for brighter future</p>
          </div>
        </NavLink>
        <NavLink className="navlink">
          <img src={FCL} alt="" />
          <div>
            <span>FCL Investment Note</span>
            <p>Invest in your Quarterly, Bi-annually and Annually goals.</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default InvestDrop;
