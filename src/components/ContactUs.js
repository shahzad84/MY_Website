import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn  , FaGithub} from 'react-icons/fa';
import img3 from '../utils/img3.jpg'; // Update with your image path
import './ContactUs.css'; // New CSS file for styling

const ContactUs = () => {
  // Replace with your Google Calendar booking link
  const calendarLink = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2HgzDNIBl8MrJALZoqI83S8lRglFd-bykC71wlc6s3Ppw3yDnASzltyvthUAB1sL5pwUE6evAV?gv=true';

  return (
    <div className="contact-us container text-center py-5">
      {/* Contact Us Heading */}
      <h1 className="display-4 mb-4">Contact Us</h1>

      {/* Contact Image */}
      <img src={img3} alt="Contact Us" className="contact-image img-fluid mb-4" />

      {/* Contact Us Button */}
      <a
        href={calendarLink}
        className="btn btn-primary btn-lg mb-4 contact-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Schedule an Appointment
      </a>

      {/* Social Media Icons */}
      <div className="social-media-icons">
        <a href="https://github.com/shahzad84" target="_blank" rel="noopener noreferrer" className="mx-2">
          <FaGithub size={30} />
        </a>
        <a href="https://twitter.com/_shahzad_8" target="_blank" rel="noopener noreferrer" className="mx-2">
          <FaTwitter size={30} />
        </a>
        <a href="https://www.linkedin.com/in/shahzad84/" target="_blank" rel="noopener noreferrer" className="mx-2">
          <FaLinkedinIn size={30} />
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
