import React from "react";
import image1 from "../utils/image1.jpg";
import image2 from "../utils/image2.jpg";
import image3 from "../utils/image3.jpg";
import "./Cards.css"; // Assuming you have a stylesheet for additional styles

const Cards = () => {
  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card custom-card h-100 shadow-lg border-0">
            <img src={image1} className="card-img-top" alt="image1" />
            <div className="card-body">
              <h5 className="card-title">Innovative Solutions</h5>
              <p className="card-text">
                Discover cutting-edge solutions designed to empower your business and drive success.
              </p>
            </div>
            <div className="card-footer bg-transparent border-0">
              <button className="btn btn-primary w-100">Learn More</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card custom-card h-100 shadow-lg border-0">
            <img src={image2} className="card-img-top" alt="image2" />
            <div className="card-body">
              <h5 className="card-title">Expert Consultation</h5>
              <p className="card-text">
                Get expert advice from industry leaders and take your project to the next level.
              </p>
            </div>
            <div className="card-footer bg-transparent border-0">
              <button className="btn btn-primary w-100">Get Started</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card custom-card h-100 shadow-lg border-0">
            <img src={image3} className="card-img-top" alt="image3" />
            <div className="card-body">
              <h5 className="card-title">Future-Ready Tech</h5>
              <p className="card-text">
                Stay ahead of the curve with technology designed to scale with your business.
              </p>
            </div>
            <div className="card-footer bg-transparent border-0">
              <button className="btn btn-primary w-100">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
