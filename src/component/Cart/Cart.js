import React from 'react';

const Cart = ({data}) => {
    const{name,image}=data;
    return (
        <div className="card card-compact w-96 shadow-xl bg-base-300 border-dotted">
            <figure><img src={image} className='h-96 w-96 ' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">SEE DETAILS</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;