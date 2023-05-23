import React, { useState } from 'react';
import Cart from '../Cart/Cart';

const Projects = () => {
    const [Pdata,setPdata]=useState()
    fetch('data.json')
      .then(response => response.json())
      .then(data => setPdata(data))
    return (
        <div>
            <h1 className='text-center font-bold text-4xl'>Projects</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 mt-11 gap-7'>
            {
                Pdata?.map(data => <Cart key={data.id} data={data}></Cart>)
            }
            </div>
        </div>
    );
};

export default Projects;