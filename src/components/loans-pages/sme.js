import React from "react";
import Dot from "../../assets/Ellipse 316.png";
import oval from "../../assets/oval.png";
import "./pages.css";
const Sme = () => {
  return (
    <div className="sme">
      <div className="hero2-comp-feat">
        <h1 className="green">SME Loan</h1>
        <p className="main">
          FastCredit offers business loans to micro, small and medium
          enterprises to support business growth. The loans are backed by
          guarantors and are for a maximum tenor of 6 months for business owners
          that meet the criteria.
        </p>

        <h1 className="black">Documentation Required</h1>
        <div className="feat">
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>12 months business accounts bank statement </p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>
              Business owner(s) government Issued ID (Voters Card, Driver
              License or Intl Passport Data Page)
            </p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>Recent Passport Photograph of business owner(s)</p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>
              Incorporation documents MEMART/CAC2/CAC7/Registration of Business
              Name
            </p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>Utility Bill not older than 3 months</p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>Evidence of Tax Payment</p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>
              Executed guarantors form & cheques (Guarantor should be bankers of
              Manager Level and above)
            </p>
          </div>
          <img className="oval" src={oval} alt="" />
          <div className="dot-text">
            <img src={Dot} alt="" />
            <p>Business owner(s) personal cheques</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sme;
