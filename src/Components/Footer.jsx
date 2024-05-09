import React from 'react';
import '../Styles/Footer.css'; // Import your CSS file
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import logo from '../Styles/Images/black.png'
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-column-container">
            <div className="footer-column">
              <h4 className="footer-heading"><img className='foot-logo' src={logo}></img></h4>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Home</h4>
              <p className="footer-link">Hours</p>
              <p className="footer-link">Learn more</p>
              <p className="footer-link">process</p>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Visits</h4>
              <p className="footer-link">Record</p>
              <p className="footer-link">History</p>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Logins</h4>
              <p className="footer-link">Client</p>
              <p className="footer-link">Student</p>
              <p className="footer-link">Teacher</p>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Socials</h4>
              <FaFacebookSquare className='ic' />
              <FaTwitter className='ic' />
              <RiInstagramFill className='ic' />
              <p>
                <i className="fab fa-twitter" style={{ color: '#ffffff' }}></i>
                <i className="fab fa-facebook-square" style={{ color: '#ffffff' }}></i>
                <i className="fab fa-instagram" style={{ color: '#ffffff' }}></i>
                <i className="fab fa-github" style={{ color: '#ffffff' }}></i>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom-container">
          <div className="footer-bottom-box">
            <div className="footer-extra">
              <h1>asher and andrew really made <span>Westmec Hairstyling corporation</span> not-for-profit parent, the <span>Westmec Hairstyling Foundation</span>.
                  Portions of this content are ©2003–2023 by individual contributors. Content available under a Creative
                  Commons license.</h1>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
