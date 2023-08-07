import Vis from "../../assets/Group 33781.png";
import Layout from "../../utils/layout/layout";
import "./vision.css";

const Vision = () => {
  return (
    <Layout>
      <div className="vision-container">
        <div className="vision-text">
          <span>Our Vision</span>
          <div className="p-cont">
            <p>To be the leading financial institution utilizing strategic partnership to delight customers and create shared value nationwide</p>
          </div>
        </div>
        <div className="vision-img">
          <img src={Vis} alt="" />
        </div>
      </div>
    </Layout>
  );
};

export default Vision;
