import React from "react";
import SecondaryEducation from "./secondary_education";
import TertiaryEducation from "./tertiary_education";
import FrontDeveloperEducation from "./front-end-developer_education";
import CoursesEducation from "./courses_education";
import "./education.css";

const Education = () => {
  return (
    <section className="education_container" >
      <h1 className="education_title">Estudios</h1>
      <div className="education_cards_container">
        <SecondaryEducation />
        <TertiaryEducation />
        <FrontDeveloperEducation />
        <CoursesEducation />
      </div>
    </section>
  );
};

export default Education;
