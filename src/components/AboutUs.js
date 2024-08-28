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
                We aim to provide the best services and products to our
                customers, with a focus on quality, innovation, and excellence.
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
                Founded in 2020, our company has grown from a small startup to a
                leading industry player. Our journey has been fueled by our
                passion for innovation and customer satisfaction.
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
