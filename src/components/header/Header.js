import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/New Fastcredit Logo.png";
import WhiteLogo from "../../assets/white-logo.png";
import "./header.css";
import InvestDrop from "../../components/invest-drop/invest";
import Dropdown from "../dropdown/dropdown";
import { useState } from "react";
import Menu from "../../assets/menu.png";
import Cancel from "../../assets/add.png";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const [invest, setInvest] = useState(false);
  const [mobile, setMobile] = useState(false);

  const toggleInvest = () => {
    setInvest(!invest);
    setDropDown(false);
  };

  const toggleDropdown = () => {
    setDropDown((prev) => !prev);
    setInvest(false);
  };

  return (
    <>
      <nav className="header">
        <div className={mobile ? "header-active" : "header-container"}>
          <div className="logo">
            {mobile ? (
              <img src={WhiteLogo} alt="logo" />
            ) : (
              <img src={logo} alt="logo" />
            )}

            {mobile ? (
              <img
                className="menu"
                src={Cancel}
                alt="menu"
                onClick={() => {
                  setMobile(false);
                }}
              />
            ) : (
              <img
                className="menu"
                src={Menu}
                alt="menu"
                onClick={() => {
                  setMobile(true);
                }}
              />
            )}
          </div>
          <div className="links">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <div>
                <li>
                  <p onClick={toggleDropdown}>Loans</p>
                </li>
                {dropDown && (
                  <Dropdown
                    action={() => {
                      setDropDown(false);
                    }}
                  />
                )}
              </div>
              <div>
                <li>
                  <p onClick={toggleInvest}>Investments</p>
                </li>
                {invest && (
                  <InvestDrop
                    prop={() => {
                      setInvest(false);
                    }}
                  />
                )}
              </div>

              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
            <div className="getapp">
              <NavLink to="/getapp">Get Fast Credit App</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
