import React from "react";
import "./AboutUs.css"
import about1 from "../utils/about1.jpg"
import about2 from "../utils/about2.jpg"
import about from "../utils/about.jpg"
const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Header Section */}
      <header className="bg-primary text-white text-center py-5">
        <h1>About Us</h1>
        <p className="lead">Get to know us better</p>
      </header>

      {/* Team Section */}
      {/* <section className="team py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://via.placeholder.com/150" alt="Team Member" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">John Doe</h5>
                  <p className="card-text">CEO & Founder</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://via.placeholder.com/150" alt="Team Member" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Jane Smith</h5>
                  <p className="card-text">Chief Marketing Officer</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://via.placeholder.com/150" alt="Team Member" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Alice Johnson</h5>
                  <p className="card-text">Lead Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Mission Section */}
      <section className="mission bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Our Mission</h2>
              <p>
              Our mission is to deliver exceptional software solutions that empower businesses to thrive in the digital age. We specialize in creating high-quality websites, mobile applications, and cutting-edge AI software tailored to meet the unique needs of our clients. Our commitment to innovation, excellence, and customer satisfaction drives us to consistently exceed expectations. Whether it's building a robust online presence, developing user-friendly mobile apps, or leveraging AI to streamline business processes, we are dedicated to helping our clients succeed in a rapidly evolving technological landscape.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={about1}
                alt="Mission"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={about2}
                alt="History"
                className="img-fluid rounded shadow-sm"
              />
            </div>
            <div className="col-md-6">
              <h2>Our History</h2>
              <p>
              I embarked on my journey as an independent developer with a clear mission: to provide high-quality software solutions tailored to client needs. What began as a personal passion has quickly grown into a focused effort to deliver exceptional websites, mobile apps, and AI software. Despite being at the beginning of my professional path, I've already had the opportunity to work with clients who value innovation and excellence. My commitment to turning ideas into impactful digital experiences is the driving force behind every project I undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="contact bg-dark text-white text-center py-5">
        <div className="container">
            <h2>Get in Touch</h2>
            <p>
            Have questions? Reach out to us via our contact page or follow us on
            social media.
            </p>
            <a href="/contact" className="btn btn-light btn-lg">
            Contact Us
            </a>
        </div>
        </section> */}

    </div>
  );
};

export default AboutUs;
