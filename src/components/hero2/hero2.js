// import React, { useState } from "react";
import circle1 from "../../assets/circle1hero2.png";
import circle2 from "../../assets/circle2hero2.png";
import Apple from "../../assets/apple.png";
import Google from "../../assets/google-play.png";
import tag from "../../assets/tag hero2.png";
import iphone from "../../assets/iPhone 12 hero2.png";
import "./hero2.css";
import Dot from "../../assets/Ellipse 316.png";
// import oval from "../../assets/oval.png";

const Hero2 = () => {
  // const [changeLoan, setChangeLoan] = useState("Loans");
  return (
    <div className="hero2-compo">
      <div className="comp-contain">
        <div className="texts">
          <div className="text-contain1">
            <p>Our simple and fast “all - purpose “ cash loans</p>
          </div>
          <div>
            <div className="text-contain2">
              <span>Features</span>
              <div className="list-text">
                <ul>
                  <li>
                    <img src={Dot} alt="" className="dot" />
                    <p className="small-texts">Our rates are very attractive</p>
                  </li>
                  <li>
                    <img src={Dot} alt="" className="dot" />
                    <p className="small-texts">No collateral needed</p>
                  </li>
                  <li>
                    <img src={Dot} alt="" className="dot" />
                    <p className="small-texts">
                      Get Credited in less than 24 hours
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="buttons">
            <div className="button">
              <img src={Apple} alt="" />
              <div>
                <p>Download on the</p>
                <span>App Store</span>
              </div>
            </div>
            <div className="button">
              <img src={Google} alt="" />
              <div>
                <p>Get it on</p>
                <span>Google Play</span>
              </div>
            </div>
          </div>
        </div>
        <div className="img">
          <img className="Iphone" src={iphone} alt="" />
          <img className="circle1" src={circle1} alt="" />
          <img className="circle2" src={circle2} alt="" />
          <img className="tag" src={tag} alt="" />
        </div>
      </div>
      {/* {changeLoan === "Invoice" ? (
        <div className="hero2-comp-feat">
          <h1 className="green">Invoice Discounting</h1>
          <p className="main">
            Get quick funds to boost your business with FCL Invoice Discounting
            product.
          </p>

          <h1 className="black">Features</h1>
          <div className="feat">
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>Get up to 70% value of your confirmed invoice.</p>
            </div>
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>Access up to 50 million Naira under this scheme </p>
            </div>
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>Low interesr rate</p>
            </div>
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>Maximum tenure of 120 days</p>
            </div>
          </div>
        </div>
      ) : changeLoan === "Sector" ? (
        <div className="hero2-comp-feat">
          <h1 className="green">Public Sector Loan</h1>
          <p className="main">
            We offer credit facility to respective ministries and agencies of
            the federal government, men and officers of the Nigeria Police
            Force, qualified staff of Lagos State Government, FRSC, NSCDC,
            Customs and Prison Services.
          </p>

          <h1 className="black">Documentation Required</h1>
          <div className="feat">
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>Recent 3 months’ salary account statement</p>
            </div>
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>Recent passport photograph in uniform (where it applies) </p>
            </div>
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>Valid means of ID</p>
            </div>
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>Work ID </p>
            </div>
          </div>
          <h1 className="green">Private Sector Loan</h1>
          <p className="main">
            Our simple and fast ‘all-purpose’ cash loans are accessible to
            employees of corporates such as the Banks, TELCOs, Insurance/other
            financial institutions, FMCGs, Pharmaceuticals, Aviation, Oil and
            Gas employees. We enable you urgently meet your financial needs,
            while you conveniently repay over an agreed tenor. And yes, our
            rates are simple and straightforward
          </p>

          <div className="feat">
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>Our rates are very attractive.</p>
            </div>
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>No collateral required</p>
            </div>
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>Get credited in less than 24 hours</p>
            </div>
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>Flexible (convenient) repayment structure and terms</p>
            </div>
          </div>
        </div>
      ) : changeLoan === "SME" ? (
        <div className="hero2-comp-feat">
          <h1 className="green">SME Loan</h1>
          <p className="main">
            FastCredit offers business loans to micro, small and medium
            enterprises to support business growth. The loans are backed by
            guarantors and are for a maximum tenor of 6 months for business
            owners that meet the criteria.
          </p>

          <h1 className="black">Documentation Required</h1>
          <div className="feat">
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>12 months business accounts bank statement </p>
            </div>
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>
                Business owner(s) government Issued ID (Voters Card, Driver
                License or Intl Passport Data Page)
              </p>
            </div>
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>Recent Passport Photograph of business owner(s)</p>
            </div>
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>
                Incorporation documents MEMART/CAC2/CAC7/Registration of
                Business Name
              </p>
            </div>
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>Utility Bill not older than 3 months</p>
            </div>
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>Evidence of Tax Payment</p>
            </div>
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>
                Executed guarantors form & cheques (Guarantor should be bankers
                of Manager Level and above)
              </p>
            </div>
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>Business owner(s) personal cheques</p>
            </div>
          </div>
        </div>
      ) : changeLoan === "BNPL" ? (
        <div className="hero2-comp-feat">
          <h1 className="green">Buy Now Pay Later</h1>
          <p className="main">
            We have merchants’ partnership that cuts across industries ranging
            from electronics and gadgets, solar energy, grocery, travel and
            healthcare to education. Essentially, we enable consumers make
            purchases across online/offline merchants and they pay in fixed
            instalments by providing them with instant access to credit at point
            of sale and also on credit cards. Our BNPL services are only
            available to those in the working-class category. Our customers are
            able to access whatever products they want and they have a choice to
            pay in instalments stretched over some months and without any
            initial down payment (equity).
          </p>

          <h1 className="black">Onboarding Steps are as follows;</h1>
          <div className="feat">
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>Download our app from play store or Appstore.</p>
            </div>
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>Register account and create profile.</p>
            </div>
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>
                Upload your Salary account bank statement and any other required
                documentation.
              </p>
            </div>
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>
                Let’s review your application and get back to you in a few hours
              </p>
            </div>
          </div>
        </div>
      ) : changeLoan === "Group" ? (
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
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>Salary advance or personal loans </p>
            </div>
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>
                Access up to 100 million Naira under this group lending scheme
              </p>
            </div>
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>Low interest rate</p>
            </div>
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>Flexible repayment plan</p>
            </div>
            <img src={oval} alt="" />
            <div className="dot-text">
              <img src={Dot} alt="" />
              <p>12 - 15 months tenure</p>
            </div>
          </div>
        </div>
      ) : null}
      ); */}
    </div>
  );
};

export default Hero2;
