import React from "react";
import Html from "../../image/html.png";
import CSS from "../../image/css.avif";
import Boot from "../../image/bootstrap.png";
import Tailwin from "../../image/Tailwind.png";
import Js from "../../image/js.png";
import Rea from "../../image/React-icon.svg.png";
import Node from "../../image/nodejs.png";
import ex from "../../image/ex.png";
import Fire from "../../image/firebase.png";
import Figma from "../../image/figma.png";
import Filmora from "../../image/filmora.png";
import Photo from "../../image/photoshop.png";
import mongo from "../../image/mongo.png";
import github from "../../image/github.png";
import nextJs from "../../image/next-js.png";
import typescript from "../../image/typescript.png";
import sideFeald from "../../image/Programming-amico (1).png";

const Service = () => {
  return (
    <div className="hero min-h-[550px] bg-base-300 mt-20 rounded-xl mb-20">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div
          className="lg:w-1/2 mt-8"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="lg:text-5xl text-3xl font-bold">
            Fully Compatible With!
          </h1>
          <h3 className="lg:text-xl text-base mt-2 ">
            Passionate Web Developer who wants to explore every tech stack.
          </h3>
          <div className="grid  lg:grid-cols-8 grid-cols-3 gap-4 mt-10 mb-8">
            <img src={Html} className="h-16 " alt="" />
            <img src={CSS} className="h-16 " alt="" />
            <img src={Boot} className="h-16 " alt="" />
            <img src={Tailwin} className="h-14 " alt="" />
            <img src={Js} className="h-16 " alt="" />
            <img src={Rea} className="h-16 " alt="" />
            <img src={Node} className="h-16 " alt="" />
            <img src={ex} className="h-16 " alt="" />
            <img src={Fire} className="h-16 " alt="" />
            <img src={Figma} className="h-16 " alt="" />
            <img src={Filmora} className="h-16 " alt="" />
            <img src={Photo} className="h-16 " alt="" />
            <img src={mongo} className="h-16 " alt="" />
            <img src={github} className="h-16 " alt="" />
            <img src={nextJs} className="h-16 " alt="" />
            <img src={typescript} className="h-16 " alt="" />
            {/* <img src={Html} className='h-16 ' alt="" /> */}
          </div>
        </div>
        <img
          src={sideFeald}
          alt=""
          className=" rounded-lg  lg:w-1/2 lg:mr-10 lg:h-96"
        />
      </div>
    </div>
  );
};

export default Service;
