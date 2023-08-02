import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/New Fastcredit Logo.png";
import "./header.css";
import InvestDrop from '../../components/invest-drop/invest';
import Dropdown from "../dropdown/dropdown";
import { useState } from "react";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const [invest, setInvest] = useState(false);

const toggleInvest =() =>{
  setInvest(!invest);
  setDropDown(false);
}


  const toggleDropdown = () => {
    setDropDown(!dropDown);
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
                <NavLink onClick={toggleDropdown}>Loans</NavLink>
              </li>
              <li>
                <NavLink onClick={toggleInvest}>Investments</NavLink>
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
          </div>
        </div>
      </nav>
      {dropDown && <Dropdown />}
      {invest && <InvestDrop />}
    </>
  );
};

export default Header;
