import React, { useEffect } from "react";
import "./App.css";
import AboutMe from "./component/AboutMe/AboutMe";
import Banner from "./component/Banner/Banner";
import Contact from "./component/Contact/Contact";
import Education from "./component/Education/Education";
import Fotter from "./component/Fotter/Fotter";
import NavBar from "./component/NavBar/NavBar";
import Projects from "./component/Project/Projects";
import Service from "./component/Service/Service";
import What from "./component/WhatIDo/What";
import { Element } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect (()=>{
    AOS.init({duration:"1000"})
  })
  return (
    <div className="max-w-[1480px] mx-auto md:p-3 p-1">
      <NavBar />
      <Element  name="home">
        <Banner />
      </Element>
      <Element data-aos="zoom-in-left" name="service">
        <Service />
      </Element>
      <Element data-aos="zoom-in-left" name="what">
        <What />
      </Element>
      <Element  name="project">
        <Projects />
      </Element>
      <Element  name="education">
        <Education />
      </Element>
      <Element data-aos="zoom-in-left" name="aboutMe">
        <AboutMe />
      </Element>
      <Element data-aos="zoom-in" name="contact">
        <Contact />
      </Element>
      <Fotter />
    </div>
  );
}

export default App;
