import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/About/about";
import Contact from "./pages/contact/Contact";
import Investments from "./pages/investment/Investment";
import Loan from "./pages/loan/Loans";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Investment" element={<Investments />} />
        <Route path="/Loan" element={<Loan />} />
      </Routes>
    </div>
  );
}

export default App;
