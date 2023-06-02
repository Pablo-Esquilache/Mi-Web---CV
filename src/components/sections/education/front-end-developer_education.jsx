import React from "react";
import img_ilustrativa from "./img_ilustrativa.jpg";

const FrontDeveloperEducation = () => {
  return (
    <div className="education_card">
      <img src={img_ilustrativa} alt="estudios secundarios" />
      <div className="txt_container">
        <h2>Fron-End developer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          cumque sint fugiat odio hic. Qui voluptate corrupti nisi tenetur
          adipisci laborum ad, ratione ut voluptatum sit pariatur doloremque quo
          doloribus?
        </p>
      </div>
    </div>
  );
};

export default FrontDeveloperEducation;
