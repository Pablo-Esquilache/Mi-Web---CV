import React from "react";
import img_ilustrativa from "./img_ilustrativa.jpg";

const WorkExperience1 = () => {
  return (
    <div className="work_card">
      <img src={img_ilustrativa} alt="experiencia laboral" />
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
