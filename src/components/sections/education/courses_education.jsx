import React from "react";
import img_ilustrativa from "./img_ilustrativa.jpg";

const CoursesEducation = () => {
  return (
    <div className="education_card">
      <img src={img_ilustrativa} alt="estudios secundarios" />
        <div className="txt_container">
          <h2>Cursos realizados</h2>
          <ul>
            <li>
              Curso de administrador de empresas, instituto ISIV (Modalidad a
              distancia).
            </li>
            <li>Curso de marketing, instituto ISIV (Modalidad a distancia).</li>
            <li>
              Curso de Proyect Manager. Modalidad on-line en www.capacitarte.org
            </li>
          </ul>
        </div>
    </div>
  );
};

export default CoursesEducation;
