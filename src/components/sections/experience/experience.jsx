import React from "react";
import WorkExperience1 from "./work_experience_1";
import WorkExperience2 from "./work_experience_2";
import WorkExperience3 from "./work_experience_3";
import WorkExperience4 from "./work_experience_4";
import ProjectExperience1 from "./project_experience_1";
import ProjectExperience2 from "./project_experience_2";
import ProjectExperience3 from "./project_experience_3";
import "./work_experience.css";

const Experience = () => {
  return (
    <section className="work_container">
      <h1>Experiencia Laboral</h1>
      <div className="work_cards_container">
        <WorkExperience1 />
        <WorkExperience2 />
        <WorkExperience3 />
        <WorkExperience4 />
      </div>
      <h1>Proyectos</h1>
      <div className="project_card_container">
        <ProjectExperience1 />
        <ProjectExperience2 />
        <ProjectExperience3 />
      </div>
    </section>
  );
};

export default Experience;
