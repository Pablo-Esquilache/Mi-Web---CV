import React from "react";
import education_img from "./education_img.png";

const TertiaryEducation = () => {
  return (
    <div className="education_card">
      <img src={education_img} alt="estudios secundarios" />
      <div className="txt_container">
        <h2>Educacion Terciaria</h2>
        <h4>I.S.F.T. N° 150</h4>
        <p>Tecnico en Administracion Publica, 2021</p>
      </div>
    </div>
  );
};

export default TertiaryEducation;
