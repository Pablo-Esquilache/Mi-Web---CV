import React, { useState } from "react";
import work_img from "./work_img.png";

const WorkExperience3 = () => {
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
      <div className="work_card" onClick={handleModalOpen}>
        <img src={work_img} alt="experiencia laboral" />
        <h2 className="work_card_title">Estacion de Servicio CIRAT S.A.</h2>
      </div>

      {isModalOpen && (
        <>
        <div className="modal-overlay active"></div>
        <div className="work_card_modal" onClick={handleModalClose}>
          <div className="work_card_text">
            <h2 className="work_card_title">Estacion de Servicio CIRAT S.A.</h2>
            <h4 className="work_card_subtitle">Playero y atención del Shop</h4>
            <ul className="work_card_description">
              <li>- Despacho de combustible en playa.</li>
              <li>- Atención al cliente en el Shop.</li>
              <li>- De 2008 a 2010</li>
            </ul>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default WorkExperience3;
