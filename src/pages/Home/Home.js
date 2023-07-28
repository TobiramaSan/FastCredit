import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Mission from "../../components/mission/Mission";
import Services from "../../components/service/Services";
import Vision from "../../components/vision/Vision";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Services />
      <Vision />
      <Mission />
    </div>
  );
};

export default Home;
