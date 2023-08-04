import React from "react";
import Header from "../../components/header/Header";
import Aboutfast from "../../components/about-fast/aboutFast";
import Meet from "../../components/meet-team/meet";
import Footer from "../../components/footer/Footer";
import Describe from "../../components/about-describe/describe";
import "./about.css";
import Background from "../../components/background/background";

const About = () => {
  return (
    <div className="about">
      <Header />

      <Describe />
      <Background />
      <Aboutfast />
      <Meet />
      <Footer />
    </div>
  );
};

export default About;
