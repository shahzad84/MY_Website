import React from "react";
import image1 from "../utils/image1.jpg";
import image2 from "../utils/image2.jpg";
import "./Small_cards.css"; // Make sure to create this stylesheet for additional styling

const Small_cards = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100 d-flex flex-row shadow-lg border-0 hover-card">
            <img src={image1} className="card-img-left" alt="..." />
            <div className="card-body d-flex flex-column justify-content-center">
              <h5 className="card-title">Innovative Solutions</h5>
              <p className="card-text">
                Discover cutting-edge solutions designed to empower your business and drive success.
              </p>
              <a href="/about" className="btn btn-primary mt-3 w-50 align-self-start">
               Explore
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100 d-flex flex-row shadow-lg border-0 hover-card">
            <img src={image2} className="card-img-left" alt="..." />
            <div className="card-body d-flex flex-column justify-content-center">
              <h5 className="card-title">Future-Ready Tech</h5>
              <p className="card-text">
                Stay ahead of the curve with technology designed to scale with your business.
              </p>
              <a href="/about" className="btn btn-primary mt-3 w-50 align-self-start">
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Small_cards;
