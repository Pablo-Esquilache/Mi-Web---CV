import React from "react";
import work_img from "./work_img.png";

const WorkExperience4 = () => {
  return (
    <div className="work_card">
      <img src={work_img} alt="experiencia laboral" />
      <div className="work_card_text">
        <h2 className="work_card_title">Experiencia Laboral 4</h2>
        <h4 className="work_card_subtitle">Lorem ipsum dolor </h4>
        <p className="work_card_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          cumque sint fugiat odio hic. Qui voluptate corrupti nisi tenetur
          adipisci laborum ad, ratione ut voluptatum sit pariatur doloremque quo
          doloribus?
        </p>
      </div>
    </div>
  );
};

export default WorkExperience4;
