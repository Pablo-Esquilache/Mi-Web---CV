import React, { useState } from "react";
import education_img from "./education_img.png";

const CoursesEducation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  return (
    <div className="container">
      <div className="education_card" onClick={handleModalOpen}>
        <img
          className="education_card_img"
          src={education_img}
          alt="estudios secundarios"
        />
        <h2 className="education_card_title">Cursos realizados</h2>
      </div>

      {isModalOpen && (
        <>
        <div className="modal-overlay active"></div>
        <div className="education_card_modal" onClick={handleModalClose}>
          <div className="education_card_text">
            <h2 className="education_card_title">Cursos realizados</h2>
            <ul className="education_card_description">
              <li>
                - Curso de administrador de empresas, instituto ISIV (Modalidad
                a distancia).
              </li>
              <li>
                - Curso de marketing, instituto ISIV (Modalidad a distancia).
              </li>
              <li>
                - Curso de Project Manager. Modalidad en línea en
                www.capacitarte.org
              </li>
            </ul>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default CoursesEducation;