import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInstagram, faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:pabloesquilache@gmail.com";
  };

  return (
    <div className="social_media_card">
      <a
        href="https://www.instagram.com/pabloesquilache"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="icon_card">
          <div className="icon_container">
            <FontAwesomeIcon className="icon" icon={faInstagram} />
          </div>
          <div className="txt_icon">
            <h3>Instagram</h3>
          </div>
        </div>
      </a>
      <a
        href="https://www.facebook.com/PabloEsquilache"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="icon_card">
          <div className="icon_container">
            <FontAwesomeIcon className="icon" icon={faFacebookF} />
          </div>
          <div className="txt_icon">
            <h3>FaceBook</h3>
          </div>
        </div>
      </a>
      <div className="icon_card" onClick={handleEmailClick}>
        <div className="icon_container">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
        </div>
        <div className="txt_icon">
          <h3>Email</h3>
        </div>
      </div>
      <a
        href="https://wa.me/542355642628"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="icon_card">
          <div className="icon_container">
          <FontAwesomeIcon className="icon" icon={faWhatsapp} />
          </div>
          <div className="txt_icon">
            <h3>Whatsapp</h3>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
