import React from "react";
import education_img from "./education_img.png";

const SecondaryEducation = () => {
  return (
    <div className="education_card">
      <img className="education_card_img" src={education_img} alt="estudios secundarios" />
      <div className="education_card_text">
        <h2 className="education_card_title">Educacion Secundaria</h2>
        <h4 className="education_card_subtitle">Escuela Media N° 4</h4>
        <p className="education_card_description">
          Bachiller, modalidad Economía y Gestión de las Organizaciones, 2007
        </p>
      </div>
    </div>
  );
};

export default SecondaryEducation;
