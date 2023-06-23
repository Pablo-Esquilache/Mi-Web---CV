import React from "react";
import ImgProfile from "./img_profile";
import TextProfile from "./text_profile";

import "./home.css";

const Home = () => {
  return (
    <section className="home_container">
        <ImgProfile />
        <TextProfile />
    </section>
  );
};

export default Home;
