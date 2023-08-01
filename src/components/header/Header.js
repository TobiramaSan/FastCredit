import { NavLink } from "react-router-dom";
import logo from "../../assets/New Fastcredit Logo.png";
import "./header.css";

import Dropdown from "../dropdown/dropdown";
import { useState } from "react";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setDropDown((prevState) => !prevState);
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
                <NavLink to="/investment">Investments</NavLink>
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
    </>
  );
};

export default Header;
