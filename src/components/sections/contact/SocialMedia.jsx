import React from "react";
import instagram from "./instagram.png";
import facebook from "./facebook.png";
import gmail from "./gmail.png"
import movil from "./movil.png";

const SocialMedia = () => {
  return (
    <div className="social_media_card">
      <div>
        <img src={instagram} alt="Logo Instagram" />
        <h3>Instagram</h3>
      </div>
      <div>
        <img src={facebook} alt="Logo facebook" />
        <h3>FaceBook</h3>
      </div>
      <div>
        <img src={gmail} alt="Logo Gmail" />
        <h3>Email</h3>
      </div>
      <div>
        <img src={movil} alt="Logo Celular" />
        <h3>Celular</h3>
      </div>
    </div>
  );
};

export default SocialMedia;
