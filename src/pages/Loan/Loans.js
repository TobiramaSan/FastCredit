import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Hero2 from "../../components/hero2/hero2";
import Group from "../../components/loans-pages/group";
import Invoice from "../../components/loans-pages/invoice";
import Sme from "../../components/loans-pages/sme";
import Sector from "../../components/loans-pages/sector";
import Bnpl from "../../components/loans-pages/bnpl";

const Loans = ({ pages }) => {
  return (
    <div className="loans">
      <Header />
      <Hero2 />
      {pages === "group" ? (
        <Group />
      ) : pages === "invoice" ? (
        <Invoice />
      ) : pages === "sme" ? (
        <Sme />
      ) : pages === "sector" ? (
        <Sector />
      ) : pages === "bnpl" ? (
        <Bnpl />
      ) : null}

      <Footer />
    </div>
  );
};

export default Loans;
