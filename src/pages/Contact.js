import React from "react";
import "./Contact.css";

import Navbar from "./Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkedAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons/faGlobeEurope";
import { faGithub, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="contact section" id="contact">
        <div className="container">
          <div className="container">
            <div className="row">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">Contact Me</h1>
            </div>
          </div>
          <h3 className="contact-title padd-15 fw-bold">Do you have any inquiries?</h3>
          <div className="row">
            <div className="contact-info-item padd-15">
              <div className="icon">
                <FontAwesomeIcon className="i" icon={faGoogle} />
              </div>
              <h4>Email me at</h4>
              <p>ruelonlayao97@gmail.com</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <FontAwesomeIcon className="i" icon={faFacebook} />
              </div>
              <h4>Chat me</h4>
              <p>Ruel Colorado Onlayao</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <FontAwesomeIcon className="i" icon={faGithub} />
              </div>
              <h4>Github</h4>
              <p>saakongkagagu</p>
            </div>
          </div>
          <h3 className="contact-title padd-15 fw-bold">SEND ME AN EMAIL</h3>
          <h4 className="contact-sub-title padd-15 fw-bold">I'M VERY RESPONSIVE TO MESSAGES</h4>
          <div className="row">
            <div className="contact-form padd-15">
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Subject" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea className="form-control" placeholder="Message"></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col- padd-15">
                  <button type="submit" className="btn">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>&copy; Contact Me: <a href="/" className="ms-2"><span>Ruel C. Onlayao</span></a></p>
            <div className="social-icons">
              <a href="https://github.com/saakongkagagu" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
              </a>
              <a href="https://www.facebook.com/onlayaoruel97/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" className="icon" />
              </a>
              <a href="https://myaccount.google.com/u/1/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGoogle} size="2x" className="icon" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
