import "./Home.css";
import gradImage from "../img/grad.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        
          <div className="container1">
            <div id="banner" className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 ok">
                    <div className="card">
                      <h1 className="text display-4 fw-bold text-white">
                        Adrian A. Manua
                      </h1>
                      <br />
                      <p className="self text-light">
                        I'm a Web Developer and I love Gaming
                      </p>
                      <a href="/about" className="btn btn-brand shadow">
                        Know More
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 zoom-effect">
                    <div className="card">
                      <img
                        src={gradImage}
                        alt="Profile Picture of Rusty Adolfo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>Copy right @ 2024 Drey's Portfolio</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
