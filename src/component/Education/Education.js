import React from "react";
import Experience from "./Experience";

const Education = () => {
  return (
    <div className="md:flex mt-10 ">
      <div className="lg:w-1/2" >
        <h1 className="text-center font-bold text-4xl">Education</h1>
        <ul className="steps steps-vertical">
          <li className="step step-primary" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            <div className="mt-5 border p-5 bg-slate-200 hover:bg-slate-400 rounded-lg">
              <h1 className="text-start text-2xl font-bold md:mx-5 mx-2">
                2010 - 2016
              </h1>
              <h1 className="text-start text-4xl font-bold md:p-5 p-2">
                High School
              </h1>
              <p className="text-start md:mx-5 mx-2">
                Jamalpur R.M Bidyapith High School I studied from sixth to tenth
                standard, and my group was selected Science, I completed the
                school through Science.
              </p>
            </div>
          </li>
          <li className="step step-primary" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            <div className="mt-5 border p-5 bg-slate-200 hover:bg-slate-400 rounded-lg">
              <h1 className="text-start text-2xl font-bold mx-2 md:mx-5">
                2017 - 2018
              </h1>
              <h1 className="text-start text-4xl font-bold md:p-5 p-2">
                Intermediate College
              </h1>
              <p className="text-start mx-2 md:mx-5 ">
                Palash Shilpanchal govt college was my higher secondary college,
                from 2017-2018 batch I took part in higher secondary examination
                through Science, I got a good result from higher secondary.
              </p>
            </div>
          </li>
          <li className="step step-primary" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            <div className="mt-5 border p-5 bg-slate-200 hover:bg-slate-400 rounded-lg">
              <h1 className="text-start text-2xl font-bold mx-2 md:mx-5">
                2018 - 2022
              </h1>
              <h1 className="text-start text-4xl font-bold p-2 md:p-5 ">
                University
              </h1>
              <p className="text-start mx-2 md:mx-5 ">
                I am from the City University Department of Computer Science and
                Engineering, completed B.Sc.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="lg:w-1/2 " >
        <h1 className="text-center font-bold text-4xl">Experience</h1>
        <ul className="steps steps-vertical">
          <li className="step step-primary h-auto">
            <Experience />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
