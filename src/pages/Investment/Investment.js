import React from "react";
import Hero3 from "../../components/hero3/hero3";
import Header from "../../components/header/Header";
import Target from "../../components/invest-pages/target";
import Kiddies from "../../components/invest-pages/kiddies";
import Footer from "../../components/footer/Footer";
import Fcl from "../../components/invest-pages/fcl";

const Investments = ({pages}) => {
  return <div className="investments">
    <Header />
    <Hero3 />
    {pages === 'target' ? (<Target />): pages === 'kiddies' ? (<Kiddies />) : pages === 'investmentnotes' ? (<Fcl />) : null}
    <Footer />
  </div>;
};

export default Investments;
