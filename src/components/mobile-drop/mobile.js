import React from "react";
import buynow from "../../assets/buynow.png";
import group from "../../assets/grouplending.png";
import invoice from "../../assets/invoice.png";
import calculator from "../../assets/loancalculator.png";
import sector from "../../assets/publicsector loan.png";
import sme from "../../assets/smeloan.png";
import { NavLink } from "react-router-dom";
import "./mobile.css";

const Mobile = ({ action }) => {
  const testArray2 = [
    {
      link: "/Loan/group-lending-scheme",
      img: group,
      firstText: "Group Lending Scheme",
      secondText: "Welfare package for employees",
    },
    {
      link: "/Loan/sme",
      img: sme,
      firstText: "SME Loans",
      secondText: "Loan for your business",
    },
    {
      link: "/Loan/invoice",
      img: invoice,
      firstText: "Invoice Discounting",
      secondText: "Get Quik Funds",
    },
    {
      link: "/Loan/buy-now-pay-later",
      img: buynow,
      firstText: "Buy Now Pay Later",
      secondText: "Buy and pay in installments",
    },
    {
      link: "/Loan/sector",
      img: sector,
      firstText: "Public & Private Loan Sector",
      secondText: "All purpose cash loans",
    },
    {
      link: "/calculator",
      img: calculator,
      firstText: "Loan Calculator",
      secondText: "Calculate your loans",
    },
  ];
  return (
    <div className="mobile-menu">
      <div className="mobile-cont">
        {testArray2.map((item, index) => {
          return (
            <NavLink
              key={index}
              className="navlink"
              to={item.link}
              onClick={action}
            >
              <img src={item.img} alt="" />
              <div>
                <span>{item.firstText}</span>
                <p>{item.secondText}</p>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
export default Mobile;
