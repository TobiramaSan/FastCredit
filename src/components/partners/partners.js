import inter from "../../assets/interswitch 1.png";
import finTech from "../../assets/fintek 1.png";
import FCC from "../../assets/fcc 1.png";
import NIBSS from "../../assets/nibss 1.png";
import "./partners.css";

const Partners = () => {
  return (
    <div className="partners">
      <div className="partners-cont">
        <div className="part-text">
          <span>Partners</span>
        </div>
        <div className="brand-logo">
          <img className="img-1" src={inter} alt="" />
          <img className="img-2" src={finTech} alt="" />
          <img className="img-3" src={FCC} alt="" />
          <img className="img-5" src={NIBSS} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
