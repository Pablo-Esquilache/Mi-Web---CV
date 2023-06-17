import React from "react";
import education_img from "./education_img.png";

const CoursesEducation = () => {
  return (
    <div className="education_card">
      <img className="education_card_img" src={education_img} alt="estudios secundarios" />
      <div className="education_card_text">
        <h2 className="education_card_title">Cursos realizados</h2>
        <ul className="education_card_description">
          <li>Curso de administrador de empresas, instituto ISIV (Modalidad a distancia).</li>
          <li>Curso de marketing, instituto ISIV (Modalidad a distancia).</li>
          <li>Curso de Project Manager. Modalidad en línea en www.capacitarte.org</li>
        </ul>
      </div>
    </div>
  );
};

export default CoursesEducation;
