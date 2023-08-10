import React from "react";
import buynow from "../../assets/buynow.png";
import group from "../../assets/grouplending.png";
import invoice from "../../assets/invoice.png";
import calculator from "../../assets/loancalculator.png";
import sector from "../../assets/publicsector loan.png";
import sme from "../../assets/smeloan.png";
import { NavLink } from "react-router-dom";
import "./dropdown.css";

const Dropdown = ({action}) => {
  const testArray = [{
    link:"/Loan/group-lending-scheme",
    img:group, 
    firstText:"Group Lending Scheme",
    secondText:"Welfare package for employees"
  },{
    link:"/Loan/sme",
    img:sme, 
    firstText:"SME Loans",
    secondText:"Loan for your business"
  },{
    link:"/Loan/invoice",
    img:invoice, 
    firstText:"nvoice Discounting",
    secondText:"Get Quik Funds"
  },{
    link:"/Loan/buy-now-pay-later",
    img:buynow, 
    firstText:"Buy Now Pay Later",
    secondText:"Buy and pay in installments"
  },{
    link:"/Loan/sector",
    img:sector, 
    firstText:"Public & Private Loan Sector",
    secondText:"All purpose cash loans"
  },{
    link:"/calulator",
    img:calculator, 
    firstText:"Loan Calculator",
    secondText:"Calculate your loans"
  }]
  return (
    <div className="dropdown-menu">
      <div className="drop-cont">
        {testArray.map((item, index)=>{
          return(
            <NavLink key={index} className="navlink" to={item.link} onClick={action}>
            <img src={item.img} alt="" />
            <div>
              <span>{item.firstText}</span>
              <p>{item.secondText}</p>
            </div>
          </NavLink>
          )
        })}
       
        {/* <NavLink className="navlink" to="/Loan/sme" onClick={action}>
          <img src={sme} alt="" />
          <div>
            <span>SME Loan</span>
            <p>Loan for your business</p>
          </div>
        </NavLink>
        <NavLink className="navlink" to="/Loan/invoice" onClick={action}>
          <img src={invoice} alt="" />
          <div>
            <span>Invoice Discounting</span>
            <p>Get Quik Funds</p>
          </div>
        </NavLink>
        <NavLink className="navlink" to="/Loan/buy-now-pay-later" onClick={action}>
          <img src={buynow} alt="" />
          <div>
            <span>Buy Now Pay Later</span>
            <p>Buy and pay in installments</p>
          </div>
        </NavLink>
        <NavLink className="navlink" to="/Loan/sector" onClick={action}>
          <img src={sector} alt="" />
          <div>
            <span>Public & Private Loan Sector</span>
            <p>All purpose cash loans</p>
          </div>
        </NavLink>
        <NavLink className="navlink" to="/calculator" onClick={action}>
          <img src={calculator} alt="" />
          <div>
            <span>Loan Calculator</span>
            <p>Calculate your loans</p>
          </div>
        </NavLink> */}
      </div>
    </div>
  );
};
export default Dropdown;