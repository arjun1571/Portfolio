/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Arjun from "../../image/22.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faLinkedin,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Resume from "../../image/Arjun React Dev.pdf";

const Banner = () => {
  return (
    <div className="hero min-h-[550px] bg-base-300 mt-10 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src={Arjun}
          alt=""
          className="lg:max-w-sm rounded-lg shadow-2xl lg:w-1/2 lg:ms-10 object-scale-down"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        />
        <div className="lg:w-1/2 mt-8" data-aos="zoom-out">
          <h1 className="text-6xl font-bold">Hi, I'm Arjun Das!</h1>
          <h3 className="text-2xl mt-2 font-bold">Front-End Web Developer</h3>
          <p className="py-6 pr-10">
            I’m a Software developer with more than 1.5+ years of professional
            experience in the software industry, specializing in React/Next Js.
            Computer Science graduate with a good understanding of JavaScript
            and Typescript having 1+ years of real-life problem-solving
            experience. My ambition is to improve or write scalable, secure
            maintainable software.
          </p>
          <a href={Resume}>
            <button className="btn btn-primary">DOWNLOAD RESUME</button>
          </a>
          <h3 className="text-3xl  font-bold mt-3">Find On Me</h3>
          <div className="flex mt-3">
            <a
              href="https://www.facebook.com/profile.php?id=100027943727580"
              target="_blank"
              rel="noopener"
            >
              <FontAwesomeIcon className="w-10 h-8" icon={faSquareFacebook} />
            </a>
            <a
              href="https://github.com/arjun1571"
              target="_blank"
              rel="noopener"
            >
              <FontAwesomeIcon className="w-10 h-8" icon={faSquareGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/arjundasbd/"
              target="_blank"
              rel="noopener"
            >
              <FontAwesomeIcon className="w-10 h-8" icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
