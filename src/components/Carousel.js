import React from 'react';
import img1 from "../utils/img1.jpg";
import img2 from "../utils/img2.jpg";
import img3 from "../utils/img3.jpg";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100 carousel-image" alt="Slide 1" />
            <div className="carousel-caption d-md-block">
              <h5 className="animated fadeInDown">Discover Your Potential</h5>
              <p className="animated fadeInUp">Unleash creativity and innovation with our tools.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100 carousel-image" alt="Slide 2" />
            <div className="carousel-caption d-md-block">
              <h5 className="animated fadeInDown">Empower Your Journey</h5>
              <p className="animated fadeInUp">Join us and transform your ideas into reality.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100 carousel-image" alt="Slide 3" />
            <div className="carousel-caption d-md-block">
              <h5 className="animated fadeInDown">Innovation at Your Fingertips</h5>
              <p className="animated fadeInUp">Explore the future of technology with us.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
