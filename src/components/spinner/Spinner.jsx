import React from "react";
import "./Spinner.css";
import LOGO from "./LOGO.png";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <img src={LOGO} alt="Logo" className="logo" />
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
