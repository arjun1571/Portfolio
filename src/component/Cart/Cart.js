import React from 'react';

const Cart = ({data}) => {
    const{title,image,url,description}=data;
    return (
        <div className="card card-compact h-[500px] border shadow-xl bg-base-300 border-dotted " data-aos="zoom-out">
            <figure><img src={image} className='h-96 w-96 ' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                <a href={url} target='_blank' rel="noopener"><button className="btn btn-primary">SEE DETAILS</button></a>
                </div>
            </div>
        </div>
    );
};

export default Cart;