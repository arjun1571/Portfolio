import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { Link } from 'react-scroll';

const Projects = () => {

    function scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }

    const [Pdata,setPdata]=useState()
    useEffect(()=>{
        fetch('project.json')
      .then(response => response.json())
      .then(data => setPdata(data))
    },[])
    console.log(Pdata);
    return (
        <div className='mt-20' >
            <h1 id="section1" className='text-center font-bold text-4xl' onClick={() => scrollToSection("section1")}><Link to="section1" smooth={true} >Projects</Link></h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-11 gap-5'>
            {
                Pdata?.map(data => <Cart key={data.id} data={data}></Cart>)
            }
            </div>
        </div>
    );
};

export default Projects;