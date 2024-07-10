import React from 'react';
import "./Portfolio.css";
import Navbar from "./Navbar";

import ilimVideo from "../Videos/ilim.mp4";
import ss1Image from '../img/ss1.png';
import ss2Image from '../img/ss2.png';


const Portfolio = () => {
  return (
    <>
      <Navbar />

      <section id="portfolio">
        <div className="container">
          <div className="pb-5">
            <h1 className="mt-5 display-1 text-center text-white">Projects</h1>
            <br />
            <hr className="text-white" />
          </div>
          <div className="isotope">
            <div className="row">
              <p className="display-6 text-white">Websites I Created</p>

              {/* First project item */}
              <div className="col-lg-6 mb-4 animate__animated animate__fadeInLeft">
                <div className="item">
                  <div className="video-container">
                    <video width="100%" controls>
                      <source src={ilimVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="overlay"></div>
                </div>
              </div>
              <div className="col-lg-6 mb-4 animate__animated animate__fadeInRight">
                <div className="item mt-3 text-white">
                  <h5>Adrian Tulahan</h5>
                  <p>* The  Ilimnan sa Dalan project is a dynamic e-commerce platform developed to revolutionize 
                    the online purchase and delivery of liquor. </p>

                  
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="container">
          <div className="pb-5">
            
            <br />
            <hr className="text-white" />
          </div>
          <div className="isotope">
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="item">
                  <img src={ss1Image} alt="one" />
                  <div className="overlay"></div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="item">
                  <img src={ss2Image} alt="two" />
                  <div className="overlay"></div>
                </div>
              </div>

              

              <hr className="text-white" />
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            
          </div>
          <div className="row mt-3">
            <div className="col-md-12 text-center text-md-left text-light">
              <p> Copy right @ 2024 Drey's Portfolio </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
