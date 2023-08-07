import rate from "../../assets/rating.png";
import ceo from "../../assets/ceo.png";
import business from "../../assets/businessmanager.png";
import estate from "../../assets/realestate.png";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="test-cont">
        <div className="test-text-cont">
          <span>Testimonials</span>
          <p>From the people who use FastCredit</p>
        </div>
        <div className="flex-test">
          <div className="flex-1">
            <div className="prec-test">
              <div className="prec-test-cont">
                <img src={rate} alt="" />
                <div className="main-text">
                  <p>
                    This is the best banking app! I’m enjoying seamless banking
                    plus the free transfers to other banks is a thing of joy.
                    This is what I call freedom. I’ve made Fast Credit my main
                    bank account and I’m gonna refer all my friends!
                  </p>
                  <div className="text-img">
                    <img src={ceo} alt="" />
                    <div className="name-title">
                      <span>Mofi Coker</span>
                      <p>Product Manager CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="prec-test">
              <div className="prec-test-cont">
                <img src={rate} alt="" />
                <div className="main-text">
                  <p>
                    This is the best banking app! I’m enjoying seamless banking
                    plus the free transfers to other banks is a thing of joy.
                    This is what I call freedom. I’ve made Fast Credit my main
                    bank account and I’m gonna refer all my friends!
                  </p>
                  <div className="text-img">
                    <img src={estate} alt="" />
                    <div className="name-title">
                      <span>Mofi Coker</span>
                      <p>Product Manager CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="prec-test">
              <div className="prec-test-cont background-grn">
                <img src={rate} alt="" />
                <div className="main-text">
                  <p className="background-grn">
                    This is the best banking app! I’m enjoying seamless banking
                    plus the free transfers to other banks is a thing of joy.
                    This is what I call freedom. I’ve made Fast Credit my main
                    bank account and I’m gonna refer all my friends!
                  </p>
                  <div className="text-img">
                    <img src={business} alt="" />
                    <div className="name-title">
                      <span className="background-grn">Mofi Coker</span>
                      <p className="background-grn">Product Manager CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-2">
            <div className="prec-test">
              <div className="prec-test-cont">
                <img src={rate} alt="" />
                <div className="main-text">
                  <p>
                    This is the best banking app! I’m enjoying seamless banking
                    plus the free transfers to other banks is a thing of joy.
                    This is what I call freedom. I’ve made Fast Credit my main
                    bank account and I’m gonna refer all my friends!
                  </p>
                  <div className="text-img">
                    <img src={ceo} alt="" />
                    <div className="name-title">
                      <span>Mofi Coker</span>
                      <p>Product Manager CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="prec-test">
              <div className="prec-test-cont">
                <img src={rate} alt="" />
                <div className="main-text">
                  <p>
                    This is the best banking app! I’m enjoying seamless banking
                    plus the free transfers to other banks is a thing of joy.
                    This is what I call freedom. I’ve made Fast Credit my main
                    bank account and I’m gonna refer all my friends!
                  </p>
                  <div className="text-img">
                    <img src={estate} alt="" />
                    <div className="name-title">
                      <span>Mofi Coker</span>
                      <p>Product Manager CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="prec-test">
              <div className="prec-test-cont">
                <img src={rate} alt="" />
                <div className="main-text">
                  <p>
                    This is the best banking app! I’m enjoying seamless banking
                    plus the free transfers to other banks is a thing of joy.
                    This is what I call freedom. I’ve made Fast Credit my main
                    bank account and I’m gonna refer all my friends!
                  </p>
                  <div className="text-img">
                    <img src={business} alt="" />
                    <div className="name-title">
                      <span>Mofi Coker</span>
                      <p>Product Manager CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
