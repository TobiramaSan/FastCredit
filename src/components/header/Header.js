import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/New Fastcredit Logo.png";
import "./header.css";
import InvestDrop from "../../components/invest-drop/invest";
import Dropdown from "../dropdown/dropdown";
import { useState } from "react";
import menu from "../../assets/menu.png";
import cancel from "../../assets/add.png";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const [invest, setInvest] = useState(false);

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
        <div className="header-container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="links">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                {/* Add parentheses to invoke the toggleDropdown function */}
                <p onClick={toggleDropdown}>Loans</p>
              </li>
              <li>
                <p onClick={toggleInvest}>Investments</p>
              </li>
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
            {/* <button>
              <img src={} alt="" />
            </button> */}
          </div>
          {/* <button>
            <img src="" alt="" />
          </button> */}
        </div>
      </nav>
      {dropDown && (
        <Dropdown
          action={() => {
            setDropDown(false);
          }}
        />
      )}
      {invest && (
        <InvestDrop
          prop={() => {
            setInvest(false);
          }}
        />
      )}
    </>
  );
};

export default Header;
