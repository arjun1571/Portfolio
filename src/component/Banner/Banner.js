import React from 'react';
import Arjun from "../../image/image 10.png"
const Banner = () => {
    return (
        <div className="hero min-h-max bg-base-200 mt-10 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img src={Arjun}alt='' className="max-w-sm rounded-lg shadow-2xl lg:w-1/2" />
          <div className='lg:w-1/2'>
            <h1 className="text-5xl font-bold">Hi, I'm Arjun Das!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;