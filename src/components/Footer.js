import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>About Us</h5>
            <p>
              We are a leading company in providing the best products and services.
              Our mission is to enhance your experience with our offerings.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">About</a></li>
              <li><a href="#" className="text-white">Services</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              1234 Street Name<br />
              City, State, 12345<br />
              Email: info@example.com<br />
              Phone: +1 234 567 890
            </p>
            <div className="d-flex justify-content-center">
              <a href="#" className="text-white me-3"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
              <a href="#" className="text-white me-3"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
              <a href="#" className="text-white"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
