import React from "react";
import img_ilustrativa from "./img_ilustrativa.jpg";

const SocialMedia = () => {
  return (
    <div className="social_media_card">
      <div>
        <img src={img_ilustrativa} alt="imagen ilustrativa" />
        <h3>Instagra</h3>
      </div>
      <div>
        <img src={img_ilustrativa} alt="imagen ilustrativa" />
        <h3>FaceBook</h3>
      </div>
      <div>
        <img src={img_ilustrativa} alt="imagen ilustrativa" />
        <h3>Twitter</h3>
      </div>
      <div>
        <img src={img_ilustrativa} alt="imagen ilustrativa" />
        <h3>Email</h3>
      </div>
      <div>
        <img src={img_ilustrativa} alt="imagen ilustrativa" />
        <h3>Celular</h3>
      </div>
    </div>
  );
};

export default SocialMedia;
