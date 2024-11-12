import React from 'react';
import './ShopCard.css'; // Add a separate CSS file for styling

const ShopCard = ({ image, title, description, price, link }) => {
  return (
    <div className="col">
      <div className="card shop-card h-100">
        <img src={image} className="card-img-top shop-card-img" alt={title} />
        <div className="card-body">
          <h5 className="card-title shop-card-title">{title}</h5>
          <p className="card-text shop-card-text">{description}</p>
          {/* <p className="card-text shop-card-price text-primary">${price}</p> */}
          <a href={link} className="btn btn-primary shop-card-button" target="_blank" rel="noopener noreferrer">
              Check Out
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
