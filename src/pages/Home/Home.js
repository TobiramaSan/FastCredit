import React from "react";
import Features from "../../components/feature/Feature";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Mission from "../../components/mission/Mission";
import Services from "../../components/service/Services";
import Vision from "../../components/vision/Vision";
import Testimonial from "../../components/testimonials/Testimonial";
import "./home.css";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div className="contents">
        <Hero />
        <Services />
        <Vision />
        <Mission />
        <Features />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
