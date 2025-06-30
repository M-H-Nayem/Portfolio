import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Banner from "../Components/Banner/Banner";
import AboutMe from "../Components/About/AboutMe";
import Skill from "../Components/Skills/Skill";

const Home = () => {
  return (
    <>
      
          <Banner></Banner>
          <AboutMe></AboutMe>
          <Skill></Skill>
    </>
  );
};

export default Home;
