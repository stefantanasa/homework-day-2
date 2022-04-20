import React, { Component } from "react";

const OneCard = ({ title, category, asin, image, price }) => {
  console.log(category);
  return (
    <div>
      <div className="one-card">
        <img className="one-card-image" alt="" src={image} />
        <p className="product-title">{title}</p>
        <p className="product-category ">{category}</p>
      </div>

      <div className="under-card ">
        <div className="offer">
          <div>
            <ion-icon name="cart-outline" style={{ height: "20px" }}></ion-icon>
          </div>
          <p>BUY NOW</p>
        </div>
        <div className="product-price">
          <div>${price}</div>
        </div>
      </div>
    </div>
  );
};

export default OneCard;
