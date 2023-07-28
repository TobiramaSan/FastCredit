import logo from "../../assets/New Fastcredit Logo.png";
import "./header.css";
const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="logo" className="logo" />
      <ul className="links">
        <li>
          <a href="/">Home</a>
        </li>
        <a href="/loan">Loans</a>
        <li>
          <a href="/investment">Investments</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
        <li>
          <a className="getapp" href="/getapp">
            Get Fast Credit App
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
