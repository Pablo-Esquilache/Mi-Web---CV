import React from "react";
import education_img from "./education_img.png";

const FrontDeveloperEducation = () => {
  return (
    <div className="education_card">
      <img className="education_card_img" src={education_img} alt="estudios secundarios" />
      <div className="education_card_text">
        <h2 className="education_card_title">Front-End Developer</h2>
        <h4 className="education_card_subtitle">Coderhouse</h4>
        <p className="education_card_description">Front End Developer, 2022 - HTML, CSS, JavaScript y React.js</p>
      </div>
    </div>
  );
};

export default FrontDeveloperEducation;
