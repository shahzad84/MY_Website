import React from 'react';

const ShopCard = ({ image, title, description, price, link }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text text-primary">${price}</p>
          <a href={link} className="btn btn-primary">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
