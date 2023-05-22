import React from 'react';
import Arjun from "../../image/22.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub,faLinkedin,faSquareFacebook } from '@fortawesome/free-brands-svg-icons'


const Banner = () => {
    return (
        <div className="hero min-h-[550px] bg-base-300 mt-10 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img src={Arjun}alt='' className="max-w-sm rounded-lg shadow-2xl lg:w-1/2 lg:ms-10" />
          <div className='lg:w-1/2 mt-8'>
            <h1 className="text-6xl font-bold">Hi, I'm Arjun Das!</h1>
            <h1 className="text-2xl mt-2 font-bold">Full Stack Web Developer</h1>
            <p className="py-6">I am a full stack web developer with an amazing ability to develop websites that are both functional and aesthetically pleasing. I have a strong understanding of web standards and best practices, and I am passionate about creating websites that users will find easy to use and visually appearing.</p>
            <button className="btn btn-primary">DOWNLOAD RESUME</button>
            <h1 className='text-3xl mt-2 font-bold mt-3'>Find On Me</h1>
            <div className='flex mt-3'>
            <FontAwesomeIcon className='w-10 h-8' icon={faSquareFacebook} />
            <FontAwesomeIcon className='w-10 h-8' icon={faSquareGithub} />
            <FontAwesomeIcon className='w-10 h-8' icon={faLinkedin} />

            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;