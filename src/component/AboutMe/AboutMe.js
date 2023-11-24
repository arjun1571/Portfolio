import React from "react";
import mybg from "../../image/my-bg.png"

const AboutMe = () => {
  return (
    <div className=" bg-base-300 mt-20 rounded-xl mb-20">
      <div className="hero  bg-base-300 lg:p-5">
        <div className="hero-content flex-col lg:flex-row">
          <img 
            src={mybg}
            className="lg:max-w-lg rounded-lg shadow-2xl lg:mr-10" alt=""
          />
          <div data-aos="fade-up"
     data-aos-duration="3000">
            <h1 className="text-5xl font-bold">About Me</h1>
            <p className="py-6">
            As a front-end web developer,  proficient in using HTML, CSS, JavaScript and TypeScript to craft interactive and responsive web pages. I am familiar with various modern front-end frameworks and libraries, such as React, bootstrap, tailwind and Next js which enable me to build dynamic and feature-rich web applications.
            </p>
            <p>Now I am working at KuiperZ as front-end web Developer.</p>
            <p>I have recently completed my B.Sc. in Computer Science and Engineering.</p>
            <p>I have the skills and a strong understanding of Front End Web Development. I learned lots of Web Technologies through my learning and working journey.</p>
            <p>dedication to his career as a web developer demonstrates his passion for technology and his commitment to staying up-to-date with the latest industry trends and best practices.As the web development field is constantly evolving, I have an innate curiosity and eagerness to learn, enabling me to adapt to new technologies and advancements in the digital </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
