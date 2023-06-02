import React from "react";
import ImgProfile from "./img_profile";
import "./home.css";
import TextProfile from "./text_profile";

const Home = () => {
  return (
    <section className="home_container">
        <ImgProfile />
        <TextProfile />
    </section>
  );
};

export default Home;
