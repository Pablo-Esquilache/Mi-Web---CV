import React from "react";
import education_img from "./education_img.png";

const SecondaryEducation = () => {
  return (
    <div className="education_card">
      <img src={education_img} alt="estudios secundarios" />
      <div className="txt_container">
        <h2>Educacion Secundaria</h2>
        <h4>Escuela Media N° 4</h4>
        <p>
          Bachiller, modalidad Economía y Gestión de las Organizaciones, 2007
        </p>
      </div>
    </div>
  );
};

export default SecondaryEducation;
