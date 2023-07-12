import React, { useState } from "react";
import work_img from "./work_img.png";

const WorkExperience2 = () => {
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
        <h2 className="work_card_title">Municipalidad de Carlos Tejedor</h2>
      </div>

      {isModalOpen && (
        <div className="work_card_modal" onClick={handleModalClose}>
          <div className="work_card_text">
            <h2 className="work_card_title">Municipalidad de Carlos Tejedor</h2>
            <h4 className="work_card_subtitle">
              Concejal y Director de Coordinación y Modernización
            </h4>
            <ul className="work_card_description">
              <li>- Concejal - 2017 a 2021</li>
              <li>- Director de Coordinación y Modernización - 2017 a 2019</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkExperience2;
