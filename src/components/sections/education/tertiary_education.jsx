import React from "react";
import education_img from "./education_img.png";

const TertiaryEducation = () => {
  return (
    <div className="education_card">
      <img className="education_card_img" src={education_img} alt="estudios secundarios" />
      <div className="education_card_text">
        <h2 className="education_card_title">Educación Terciaria</h2>
        <h4 className="education_card_subtitle">I.S.F.T. N° 150</h4>
        <p className="education_card_description">Técnico en Administración Pública, 2021</p>
      </div>
    </div>
  );
};

export default TertiaryEducation;
