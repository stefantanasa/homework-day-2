import React, { Component } from "react";

const OneCard = ({ title, category, asin, image, price }) => {
  return (
    <div>
      <div className="one-card">
        <img className="one-card-image" src={image} />
        <p className="product-title">{title}</p>
      </div>
      <div className="under-card ">
        <div className="offer">
          <div>
            <ion-icon name="cart-outline" style={{ height: "20px" }}></ion-icon>
          </div>

          <p>BUY NOW</p>
        </div>
        <div className="product-category">
          <div>${price}</div>
        </div>
      </div>
    </div>
  );
};

export default OneCard;
