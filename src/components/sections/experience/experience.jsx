import React from "react";
import WorkExperience1 from "./work_experience_1";
import WorkExperience2 from "./work_experience_2";
import WorkExperience3 from "./work_experience_3";
import WorkExperience4 from "./work_experience_4";
import "./work_experience.css"

const Experience = () => {
  return (
    <section className="work_container">
      <h1>EXPERIENCIA LABORAL</h1>
      <div className="work_cards_container">
        <WorkExperience1 />
        <WorkExperience2 />
        <WorkExperience3 />
        <WorkExperience4 />
      </div>
    </section>
  );
};

export default Experience;
