import React from "react";
import work_img from "./work_img.png";

const WorkExperience2 = () => {
  return (
    <div className="work_card">
      <img src={work_img} alt="experiencia laboral" />
      <div className="work_card_text">
        <h2 className="work_card_title">Municipalidad de Carlos Tejedor</h2>
        <h4 className="work_card_subtitle">Concejal - 2017 a 2021 y Director de Coordinación y Modernización - 2017 a 2019</h4>
        {/* <ul className="work_card_description">
          <li>Concejal - 2017 a 2021</li>
          <li>Director de Coordinación y Modernización - 2017 a 2019</li>
        </ul> */}
      </div>
    </div>
  );
};

export default WorkExperience2;
