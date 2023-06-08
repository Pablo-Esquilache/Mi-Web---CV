import React from "react";
import work_img from "./work_img.png";

const WorkExperience1 = () => {
  return (
    <div className="work_card">
      <img src={work_img} alt="experiencia laboral" />
      <div className="txt_container">
        <h2>Supermercado Alcer</h2>
        <h4>Cajero y Repositor - 2011 a la actualidad</h4>
        <ul>
          <li>Atención al cliente en el sector de cajas.</li>
          <li>Reposición de mercadería.</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience1;
