import React from 'react';

import Features from "../../components/feature/Feature";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Mission from "../../components/mission/Mission";
import Services from "../../components/service/Services";
import Vision from "../../components/vision/Vision";
import Testimonial from "../../components/testimonials/Testimonial";
import "./home.css";
import Footer from "../../components/footer/Footer";
import Hero2 from '../../components/hero2/hero2';

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
        <Hero2 />
      </div>
    </div>
  );
};

export default Home;
