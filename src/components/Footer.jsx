import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_red.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div className="flex flex-col items-center text-center">
          <img src={logo} alt="Logo" className="w-32 mb-3" />
          <p className="text-sm">Your gateway to amazing content!</p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
            <li><Link to="/blogs" className="hover:text-gray-400">Blogs</Link></li>
            <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-3">Contacts</h3>
          <p>Email: ravipatel1022001@gmail.com</p>
          <p>Phone: +91 7800285437</p>
          <p>Location: New Ashok Nager, New Delhi, India</p>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-3">Follow On</h3>
          <div className="flex justify-center gap-4 text-xl">

            <a href="https://www.linkedin.com/in/ravipatel0052" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 text-xl">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a href="https://github.com/ravipatel0052" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white-600 text-xl">
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a href="https://www.instagram.com/ravi_patel_0052/"
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-pink-500 text-xl">
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a href="https://www.facebook.com/profile.php?viewas=100000686899395&id=100010923798968" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-500 text-xl">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} My Site. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
