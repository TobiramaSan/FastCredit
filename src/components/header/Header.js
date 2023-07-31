import { NavLink } from "react-router-dom";
import logo from "../../assets/New Fastcredit Logo.png";
import "./header.css";
const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="logo" className="logo" />
      <ul className="links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <NavLink to="/loan">Loans</NavLink>
        <li>
          <NavLink to="/investment">Investments</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li>
          <NavLink className="getapp" to="/getapp">
            Get Fast Credit App
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
