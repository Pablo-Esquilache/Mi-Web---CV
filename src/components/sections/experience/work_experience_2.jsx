import React from "react";
import work_img from "./work_img.png";

const WorkExperience2 = () => {
  return (
    <div className="work_card">
      <img src={work_img} alt="experiencia laboral" />
      <div className="txt_container">
        <h2>Municipalidad de Carlos Tejedor</h2>
        <ul>
          <li>Concejal - 2017 a 2021</li>
          <li>Director de Coordinación y Modernización - 2017 a 2019</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience2;
