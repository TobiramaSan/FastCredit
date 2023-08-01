import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from "./pages/Contact/Contact";
import Investments from "./pages/Investment/Investment";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
      <Route path = "/About" element ={<About />}/>
      <Route path ="/Contact" element ={<Contact />}/>
      <Route path ="/Investment" element ={<Investments />}/>
      </Routes>
      
    </div>
  );
}

export default App;
