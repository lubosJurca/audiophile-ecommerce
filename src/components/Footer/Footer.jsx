// logo & images
import logo from "../../assets/logo.png";

// css
import "./Footer.css";

// components
import Navbar from "../Navbar/Navbar";

// material UI
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import { Fade } from "react-awesome-reveal";

function Footer() {
  return (
    <Fade triggerOnce delay={0.4} >
      <footer>
        <section className="footer-info">
          <div className="info">
            <h2>
              Bringing you the <span>best</span> audio gear
            </h2>
            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div className="footer-image-wrapper">
            {/* <img src={footerImg} alt="Man listening to a music" /> */}
          </div>
        </section>

        <div className="dark-footer-container">
          <section className="dark-footer">
            <img src={logo} alt="logo" />
            <Navbar />
            <p className="footer-text">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <ul className="icons">
              <li>
                <FacebookIcon />
              </li>
              <li>
                <TwitterIcon />
              </li>
              <li>
                <InstagramIcon />
              </li>
            </ul>
            <p className="copyright">Copyright 2021. All Rights Reserved</p>
          </section>
        </div>
      </footer>
    </Fade>
  );
}

export default Footer;
