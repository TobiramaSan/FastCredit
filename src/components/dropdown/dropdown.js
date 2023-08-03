import React from "react";
import buynow from "../../assets/buynow.png";
import group from "../../assets/grouplending.png";
import invoice from "../../assets/invoice.png";
import calculator from "../../assets/loancalculator.png";
import sector from "../../assets/publicsector loan.png";
import sme from "../../assets/smeloan.png";
import { NavLink } from "react-router-dom";
import "./dropdown.css";

const Dropdown = () => {
  return (
    <div className="dropdown-menu">
      <div className="drop-cont">
        <NavLink className="navlink" to="/Loan/group-lending-scheme">
          <img src={group} alt="" />
          <div>
            <span>Group Lending Scheme</span>
            <p>Welfare package for employees</p>
          </div>
        </NavLink>
        <NavLink className="navlink" to="/Loan/sme">
          <img src={sme} alt="" />
          <div>
            <span>SME Loan</span>
            <p>Loan for your business</p>
          </div>
        </NavLink>
        <NavLink className="navlink" to="/Loan/invoice">
          <img src={invoice} alt="" />
          <div>
            <span>Invoice Discounting</span>
            <p>Get Quik Funds</p>
          </div>
        </NavLink>
        <NavLink className="navlink" to="/Loan/buy-now-pay-later">
          <img src={buynow} alt="" />
          <div>
            <span>Buy Now Pay Later</span>
            <p>Buy and pay in installments</p>
          </div>
        </NavLink>
        <NavLink className="navlink" to="/Loan/sector">
          <img src={sector} alt="" />
          <div>
            <span>Public & Private Loan Sector</span>
            <p>All purpose cash loans</p>
          </div>
        </NavLink>
        <NavLink className="navlink" to="/calculator">
          <img src={calculator} alt="" />
          <div>
            <span>Loan Calculator</span>
            <p>Calculate your loans</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
export default Dropdown;
