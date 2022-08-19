import React from "react";
import "./Footer.css";
import logo from "../../../assests/hmpg/logo.jpg";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer"> 
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            <p>
              <FaMapMarkerAlt /> &nbsp; Address: Kurunegala
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +1230 123 1231.
            </p>
            <p>
              <FaFax /> &nbsp; Fax: +12342762178
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: admin@gmail.com
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: www.FarmCare.com
            </p>
          </div>
        </div>
        <div className="footer-box-logo" align="right">
          <img src={logo} alt="logo" />
          <p className="u-text-small">&copy; Copyright 2022. FarmCare.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;