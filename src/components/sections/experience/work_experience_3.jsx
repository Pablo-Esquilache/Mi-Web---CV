import React from "react";
import work_img from "./work_img.png";

const WorkExperience3 = () => {
  return (
    <div className="work_card">
      <img src={work_img} alt="experiencia laboral" />
      <div className="work_card_text">
        <h2 className="work_card_title">Estacion de Servicio CIRAT S.A.</h2>
        <h4 className="work_card_subtitle">Playero y atención del Shop - 2008 a 2010</h4>
        <ul className="work_card_description">
          <li>Despacho de combustible en playa.</li>
          <li>Atención al cliente en el Shop.</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience3;
