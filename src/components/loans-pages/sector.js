import React from "react";
import Dot from "../../assets/Ellipse 316.png";
import oval from "../../assets/oval.png";
import "./pages.css";
const Sector = () => {
  return (
    <div className="sector">
      <div className="hero2-comp-feat">
        <h1 className="green">Public Sector Loan</h1>
        <p className="main">
          We offer credit facility to respective ministries and agencies of the
          federal government, men and officers of the Nigeria Police Force,
          qualified staff of Lagos State Government, FRSC, NSCDC, Customs and
          Prison Services.
        </p>

        <h1 className="black">Documentation Required</h1>
        <div className="feat">
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>Recent 3 months’ salary account statement</p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>Recent passport photograph in uniform (where it applies) </p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>Valid means of ID</p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>Work ID </p>
          </div>
        </div>
        <h1 className="green">Private Sector Loan</h1>
        <p className="main">
          Our simple and fast ‘all-purpose’ cash loans are accessible to
          employees of corporates such as the Banks, TELCOs, Insurance/other
          financial institutions, FMCGs, Pharmaceuticals, Aviation, Oil and Gas
          employees. We enable you urgently meet your financial needs, while you
          conveniently repay over an agreed tenor. And yes, our rates are simple
          and straightforward
        </p>

        <div className="feat">
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>Our rates are very attractive.</p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>No collateral required</p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>Get credited in less than 24 hours</p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>Flexible (convenient) repayment structure and terms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sector;
