import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Investments from "./pages/Investment/Investment";
import Loans from "./pages/Loan/Loans";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Investment" element={<Investments />} />
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
