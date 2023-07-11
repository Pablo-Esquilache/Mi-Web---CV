import React, { useState } from "react";
import work_img from "./work_img.png";

const WorkExperience1 = () => {
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
      <div className="work_card"  onClick={handleModalOpen}>
        <img src={work_img} alt="experiencia laboral" />
        <h2 className="work_card_title">Supermercado Alcer</h2>
      </div>

      {isModalOpen && (
        <div className="work_card_modal" onClick={handleModalClose}>
          <div className="work_card_text">
            <h2 className="work_card_title">Supermercado Alcer</h2>
            <h4 className="work_card_subtitle">
              Cajero y Repositor - 2011 a la actualidad
            </h4>
            <ul className="work_card_description">
              <li>Atención al cliente en el sector de cajas.</li>
              <li>Reposición de mercadería.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkExperience1;



// import React from "react";
// import work_img from "./work_img.png";

// const WorkExperience1 = () => {
//   return (
//     <div className="work_card">
//       <img src={work_img} alt="experiencia laboral" />
//       <div className="work_card_text">
//         <h2 className="work_card_title">Supermercado Alcer</h2>
//         <h4 className="work_card_subtitle">Cajero y Repositor - 2011 a la actualidad</h4>
//         <ul className="work_card_description">
//           <li>Atención al cliente en el sector de cajas.</li>
//           <li>Reposición de mercadería.</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default WorkExperience1;
