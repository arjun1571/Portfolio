import React from 'react';
import Arjun from "../../image/22.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub,faLinkedin,faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import Resume from "../../image/Arjun React Dev.pdf"


const Banner = () => {
    return (
        <div className="hero min-h-[550px] bg-base-300 mt-10 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img src={Arjun}alt='' className="lg:max-w-sm rounded-lg shadow-2xl lg:w-1/2 lg:ms-10 object-scale-down" />
          <div className='lg:w-1/2 mt-8'>
            <h1 className="text-6xl font-bold">Hi, I'm Arjun Das!</h1>
            <h1 className="text-2xl mt-2 font-bold">Full Stack Web Developer</h1>
            <p className="py-6 pr-10">I am a full stack web developer with an amazing ability to develop websites <br /> that are both functional and aesthetically pleasing. I have a strong <br /> understanding of web standards and best practices, and I am passionate br about  creating websites that users will find easy to use and visually appearing.</p>
            <a href={Resume}>
            <button className="btn btn-primary">DOWNLOAD RESUME</button>
            </a>
            <h1 className='text-3xl  font-bold mt-3'>Find On Me</h1>
            <div className='flex mt-3'>
            <a href="https://www.facebook.com/profile.php?id=100027943727580" target='_blank' rel="">
            <FontAwesomeIcon className='w-10 h-8' icon={faSquareFacebook} />
            </a>
            <a href="https://github.com/arjun1571" target='_blank'>
            <FontAwesomeIcon className='w-10 h-8' icon={faSquareGithub} />
            </a>
            <a href="https://www.linkedin.com/in/arjundasbd/" target='_blank'>
            <FontAwesomeIcon className='w-10 h-8' icon={faLinkedin} />
            </a>

            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;