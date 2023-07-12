import React, { useState } from "react";
import education_img from "./education_img.png";

const SecondaryEducationContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    document.body.classList.add('modal-open');

  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    document.body.classList.remove('modal-open');
  };
  

  return (
    <div className="container">
      <div className="education_card" onClick={handleModalOpen}>
        <img
          className="education_card_img"
          src={education_img}
          alt="estudios secundarios"
        />
        <h2 className="education_card_title">Educación Secundaria</h2>
      </div>

      {isModalOpen && (
        <>
         <div className="modal-overlay active"></div>
        <div className="education_card_modal" onClick={handleModalClose}>
          <div className="education_card_text">
            <h2 className="education_card_title">Educacion Secundaria</h2>
            <h4 className="education_card_subtitle">Escuela Media N° 4</h4>
            <p className="education_card_description">
              Bachiller, modalidad Economía y Gestión de las Organizaciones,
              2007
            </p>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default SecondaryEducationContainer;
