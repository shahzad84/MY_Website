import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="font-weight-bold text-white">About Us</h5>
            <p className="text-light">
              We provide the best products and services to enhance your experience.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-md-4 mb-4">
            <h5 className="font-weight-bold text-white">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Home</a></li>
              <li><a href="#" className="text-light">About</a></li>
              <li><a href="#" className="text-light">Services</a></li>
              <li><a href="#" className="text-light">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-4">
            <h5 className="font-weight-bold text-white">Contact Us</h5>
            <p className="text-light">
              1234 Street Name, City, State, 12345<br />
              Email: info@example.com<br />
              Phone: +1 234 567 890
            </p>
            <div className="d-flex justify-content-center justify-content-md-start mt-3">
              <a href="#" className="text-light me-3">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" className="text-light me-3">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="text-light">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row">
          <div className="col text-center">
            <p className="mb-0 text-light">&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
