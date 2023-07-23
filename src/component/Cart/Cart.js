import React from 'react';

const Cart = ({data}) => {
    const{title,image,url,description}=data;
    return (
        <div className="card card-compact w-90 shadow-xl bg-base-300 border-dotted">
            <figure><img src={image} className='h-96 w-96 ' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                <a href={url} target='_blank'><button className="btn btn-primary">SEE DETAILS</button></a>
                </div>
            </div>
        </div>
    );
};

export default Cart;