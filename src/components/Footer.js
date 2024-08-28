import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css"; // Import the new CSS file

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">About Us</h5>
            <p className="footer-text">
              We provide the best products and services to enhance your experience.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">About</a></li>
              <li><a href="#" className="footer-link">Services</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Contact Us</h5>
            <p className="footer-text">
              1234 Street Name, City, State, 12345<br />
              Email: info@example.com<br />
              Phone: +1 234 567 890
            </p>
            <div className="d-flex justify-content-center justify-content-md-start mt-3">
              <a href="#" className="footer-icon">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" className="footer-icon">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="footer-icon">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>
        </div>

        <hr className="footer-divider my-4" />

        <div className="row">
          <div className="col text-center">
            <p className="footer-copy mb-0">&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
