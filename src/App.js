import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Investments from "./pages/Investment/Investment";
import Loans from "./pages/Loan/Loans";
import Calculator from "./components/loans-pages/calculator";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Investment/target-savings" element={<Investments pages = 'target'/>} />
        <Route path="/Investment/kiddies-swag" element={<Investments pages = 'kiddies'/>} />
        <Route path="/Investment/investment-notes" element={<Investments pages = 'investmentnotes'/>} />
        <Route
          path="/Loan/group-lending-scheme"
          element={<Loans pages="group" />}
        />
        <Route path="/Loan/invoice" element={<Loans pages="invoice" />} />
        <Route
          path="/Loan/buy-now-pay-later"
          element={<Loans pages="bnpl" />}
        />
        <Route path="/Loan/sme" element={<Loans pages="sme" />} />
        <Route path="/Loan/sector" element={<Loans pages="sector" />} />
      </Routes>
    </div>
  );
}

export default App;
