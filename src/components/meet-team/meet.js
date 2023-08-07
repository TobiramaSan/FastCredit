import React from "react";
import Abiola from "../../assets/abiola.png";
import Abolade from "../../assets/abolade.png";
import Adetola from "../../assets/adetola.png";
import Daniel from "../../assets/daniel.png";
import Emeka from "../../assets/emeka.png";
import Idechi from "../../assets/idechi.png";
import Olabisi from "../../assets/olabisi.png";
import Rotimi from "../../assets/rotimi.png";
import Sunday from "../../assets/sunday.png";
import "./meet.css";

const Meet = () => {
  return (
    <div className="meet">
      <div className="meet-container">
        <div className="meet-text">
          <span>Meet our Team</span>
          <h3>Team of winners and leaders</h3>
        </div>
        <div className="team-flex">
          <div className="inner">
            <div className="details">
              <img src={Emeka} alt="" />
              <div className="name-pos">
                <h1>EMEKA ILOELUNACHI</h1>
                <span>MD/CEO</span>
              </div>
            </div>
            <div className="details">
              <img src={Adetola} alt="" />
              <div className="name-pos">
                <h1>ADETOLA OKUNADE</h1>
                <span>CHIEF OPERATING OFFICER</span>
              </div>
            </div>
            <div className="details">
              <img src={Idechi} alt="" />
              <div className="name-pos">
                <h1>IDECHI AMUCHEAZI</h1>
                <span>CHIEF FINTECH AND INNOVATION OFFICER</span>
              </div>
            </div>
          </div>
          <div className="inner">
            <div className="details">
              <img src={Abiola} alt="" />
              <div className="name-pos">
                <h1>ABIOLA OGUNSOLA</h1>
                <span>CHIEF FINANCIAL OFFICER</span>
              </div>
            </div>
            <div className="details">
              <img src={Olabisi} alt="" />
              <div className="name-pos">
                <h1>OLABISI OMOREGIE</h1>
                <span>HEAD HR/ADMINISTRATION</span>
              </div>
            </div>
            <div className="details">
              <img src={Sunday} alt="" />
              <div className="name-pos">
                <h1>SUNDAY OLUDAYO</h1>
                <span>GROUP HEAD CONSUMER LENDING</span>
              </div>
            </div>
          </div>
          <div className="inner inner-200">
            <div className="details">
              <img src={Rotimi} alt="" />
              <div className="name-pos">
                <h1>ROTIMI ASUMAH</h1>
                <span>CHIEF RISK OFFICER</span>
              </div>
            </div>
            <div className="details">
              <img src={Daniel} alt="" />
              <div className="name-pos">
                <h1>DANIEL UGORO</h1>
                <span>HEAD INTERNAL AUDIT</span>
              </div>
            </div>
            <div className="details">
              <img src={Abolade} alt="" />
              <div className="name-pos">
                <h1>ABOLADE OJO</h1>
                <span>HEAD COMPLIANCE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;
