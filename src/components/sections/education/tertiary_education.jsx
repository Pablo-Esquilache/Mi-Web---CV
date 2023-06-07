import React from "react";
import img_ilustrativa from "./img_ilustrativa.jpg";

const TertiaryEducation = () => {
  return (
    <div className="education_card">
      <img src={img_ilustrativa} alt="estudios secundarios" />
      <div className="txt_container">
        <h2>Educacion Terciaria</h2>
        <h4>I.S.F.T. N° 150</h4>
        <p>Tecnico en Administracion Publica, 2021</p>
      </div>
    </div>
  );
};

export default TertiaryEducation;
