import React from "react";

const WhatCart = ({ data }) => {
  const { name, img, des } = data;
  return (
    <div className="card h-[500px]  bg-base-100 shadow-xl border hover:bg-blue-400 p-3" data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default WhatCart;
