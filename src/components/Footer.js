import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram , faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="video" className="footer-link">Courses</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Contact Us</h5>
            <p className="footer-text">
              India<br />
              Email: technogamerz8421@gmail.com<br />
              
            </p>
            <div className="d-flex justify-content-center justify-content-md-start mt-3">
              <a href="https://github.com/shahzad84" className="footer-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a href="https://twitter.com/_shahzad_8" className="footer-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://www.linkedin.com/in/shahzad84/" className="footer-icon" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
        </div>

        <hr className="footer-divider my-4" />

        <div className="row">
          <div className="col text-center">
            <p className="footer-copy mb-0">&copy; 2024 CodingAI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
