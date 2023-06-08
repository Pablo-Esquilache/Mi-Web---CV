import React from "react";
import education_img from "./education_img.png";

const FrontDeveloperEducation = () => {
  return (
    <div className="education_card">
      <img src={education_img} alt="estudios secundarios" />
      <div className="txt_container">
        <h2>Fron-End developer</h2>
        <h4>Coderhouse</h4>
        <p>Front End Developer, 2022 HTML, CSS, JAVASCRIIPT y REACT.JS</p>
      </div>
    </div>
  );
};

export default FrontDeveloperEducation;
