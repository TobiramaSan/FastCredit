import React from "react";
import location from "../../assets/location.png";
import face from "../../assets/facebookicon.png";
import twit from "../../assets/twittericon.png";
import insta from "../../assets/instaicon.png";
import what from "../../assets/whatsapp.png";

import "./office.css";
const Office = () => {
  return (
    <div className="office">
      <div className="office-contain">
        <div className="part1">
          <div className="office-title">
            <span>Our Offices</span>
            <h1>We are open 24/7 for you.</h1>
          </div>
          <div className="office-add">
            <img src={location} alt="" />
            <div className="address">
              <h1>Head Office</h1>
              <p>
                Ground Floor, wing C, Motorways Complex, Opposite 7-Up Alausa
                Lagos
              </p>
              <span>+234 - 1 - 8885046</span>
            </div>
          </div>
          <div className="office-add">
            <img src={location} alt="" />
            <div className="address">
              <h1>Abuja</h1>
              <p>
                No 10 Gimbiya Street, Beside H-Medix Plaza, Area 11 Garki, FCT -
                Abuja
              </p>
              <span>+234 - 8165648643</span>
            </div>
          </div>
          <div className="office-add">
            <img src={location} alt="" />
            <div className="address">
              <h1>Abeokuta</h1>
              <p>
                2nd Floor, Beulah Plaza, Housing Corporation Road, Beside INEC
                office, Ibara, Abeokuta, Ogun State
              </p>
              <span>+234 - 8125280960</span>
            </div>
          </div>
          <div className="office-add">
            <img src={location} alt="" />
            <div className="address">
              <h1>Victoria Island</h1>
              <p>
                No 1 Akin Ogunlewe Street, Off Ligali Ayorinde, Victoria Island
                Lagos State.
              </p>
              <span>+234 - 8183598015</span>
            </div>
          </div>
          <div className="office-add">
            <img src={location} alt="" />
            <div className="address">
              <h1>Akure</h1>
              <p>
                BOI House 2nd Floor, Oval Wing, Alagbaka, Along Ade/Owo Road,
                Akure, Ondo State
              </p>
              <span>+234 - 8090584211</span>
            </div>
          </div>
          <div className="office-add">
            <img src={location} alt="" />
            <div className="address">
              <h1>Ibadan</h1>
              <p>
                2nd Floor = Alice Place, Total Garden, State Secretariat Road,
                Ibadan, Oyo State.
              </p>
              <span>+234 - 8090584037</span>
            </div>
          </div>
        </div>
        <div className="social">
          <div className="social-title">
            <span>Our Socials</span>
            <h1>Always online for you</h1>
          </div>
          <div className="main-social">
            <div className="social-blk">
              <img src={twit} alt="" />
            </div>
            <div className="social-blk">
              <img src={what} alt="" />
            </div>
            <div className="social-blk">
              <img src={face} alt="" />
            </div>
            <div className="social-blk">
              <img src={insta} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Office;
