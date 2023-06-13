import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
  return (
    <div className="social_media_card">
      <div className="icon_card">
        <div className="icon_container">
          <FontAwesomeIcon className="icon" icon={faInstagram} />
        </div>
        <div className="txt_icon">
          <h3>Instagram</h3>
        </div>
      </div>
      <div className="icon_card">
        <div className="icon_container">
          <FontAwesomeIcon className="icon" icon={faFacebookF} />
        </div>
        <div className="txt_icon">
          <h3>FaceBook</h3>
        </div>
      </div>
      <div className="icon_card">
        <div className="icon_container">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
        </div>
        <div className="txt_icon">
          <h3>Email</h3>
        </div>
      </div>
      <div className="icon_card">
        <div className="icon_container">
          <FontAwesomeIcon className="icon" icon={faMobile} />
        </div>
        <div className="txt_icon">
          <h3>Celular</h3>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
