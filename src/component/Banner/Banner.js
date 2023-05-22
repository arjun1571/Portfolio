import React from 'react';
import Arjun from "../../image/image 10.png"
const Banner = () => {
    return (
        <div className="hero min-h-max bg-base-200 mt-10 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img src={Arjun}alt='' className="max-w-sm rounded-lg shadow-2xl lg:w-1/2" />
          <div className='lg:w-1/2 mt-8'>
            <h1 className="text-5xl font-bold">Hi, I'm Arjun Das!</h1>
            <h1 className="text-xl mt-2 font-bold">Full Stack Web Developer</h1>
            <p className="py-6">I am a full stack web developer with an amazing ability to develop websites that are both functional and aesthetically pleasing. I have a strong understanding of web standards and best practices, and I am passionate about creating websites that users will find easy to use and visually appearing.</p>
            <button className="btn btn-primary">Get Started</button>
            <h1>Find On Me</h1>
            <div className='flex'>
              <h1>1</h1>
              <h1>1</h1>
              <h1>1</h1>
            </div>
            <div className='flex'>
              <h1>1</h1>
              <h1>1</h1>
              <h1>1</h1>
            </div>
            <div className='flex'>
              <h1>1</h1>
              <h1>1</h1>
              <h1>1</h1>
            </div>
            <div className='flex'>
              <h1>1</h1>
              <h1>1</h1>
              <h1>1</h1>
            </div>
            <div className='flex'>
              <h1>1</h1>
              <h1>1</h1>
              <h1>1</h1>
            </div>
            <div className='flex'>
              <h1>1</h1>
              <h1>1</h1>
              <h1>1</h1>
            </div>
            <div className='flex'>
              <h1>1</h1>
              <h1>1</h1>
              <h1>1</h1>
            </div><div className='flex'>
              <h1>1</h1>
              <h1>1</h1>
              <h1>1</h1>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;