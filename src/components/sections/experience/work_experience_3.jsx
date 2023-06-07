import React from "react";
import img_ilustrativa from "./img_ilustrativa.jpg";

const WorkExperience3 = () => {
  return (
    <div className="work_card">
      <img src={img_ilustrativa} alt="experiencia laboral" />
      <div className="txt_container">
        <h2>Estacion de Servicio CIRAT S.A.</h2>
        <h4>Playero y atención del Shop - 2008 a 2010</h4>
        <ul>
          <li>Despacho de combustible en playa.</li>
          <li>Atención al cliente en el Shop.</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience3;
