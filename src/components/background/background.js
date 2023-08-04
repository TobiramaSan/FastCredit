import React from "react";
import "./background.css";
import people from "../../assets/people.png";
const Background = () => {
  return (
    <div className="background">
      <img src={people} alt="" />
    </div>
  );
};

export default Background;
