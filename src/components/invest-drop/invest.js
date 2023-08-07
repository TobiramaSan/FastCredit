import React from "react";
import { NavLink } from "react-router-dom";
import FCL from "../../assets/FCL.png";
import kids from "../../assets/kiddies.png";
import target from "../../assets/target.png";
import "./invest.css";

const InvestDrop = ({ prop }) => {
  const arrayInvest = [
    {
      linkInvest: "/Investment/target-savings",
      imgInvest: target,
      firstTextInvest: "Target Savings",
      secondTextInvest: "Save daily, weekly or monthly to achieve target goals",
    },
    {
      linkInvest: "/Investment/kiddies-swag",
      imgInvest: kids,
      firstTextInvest: "Kiddies Swag",
      secondTextInvest: "Invest in your child for a brighter future",
    },
    {
      linkInvest: "/Investment/investment-notes",
      imgInvest: FCL,
      firstTextInvest: "FCL Investment Note",
      secondTextInvest: "Invest in your Quarterly, Bi-annually and Annually goals.",
    },
  ];
  return (
    <div className="invest-drop">
      <div className="drop-cont">
        {arrayInvest.map((item, index) => {
          return (
            <NavLink key={index} className="navlink" to={item.linkInvest} onClick={prop}>
              <img src={item.imgInvest} alt="" />
              <div>
                <span>{item.firstTextInvest}</span>
                <p>{item.secondTextInvest}</p>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default InvestDrop;
