import React from "react";
import { ReactComponent as Logo } from "../../../assets/svgs/logo.svg";
import { ReactComponent as IconInsta } from "../../../assets/svgs/IconInsta.svg";
import { ReactComponent as IconYoutube } from "../../../assets/svgs/IconYoutube.svg";
import { ReactComponent as IconTwitch } from "../../../assets/svgs/IconTwitch.svg";
import { ReactComponent as IconTwitter } from "../../../assets/svgs/IconTwitter.svg";
import { Link } from "react-router-dom";
import "./FooterSection.scss";

const FooterSection = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <Link>
              <Logo />
            </Link>
          </div>
          <div className="footer-column">
            <h4 className="title">Menu</h4>
            <div className="link-wrapper">
              <Link className="footer-link">Order tracking</Link>
              <Link className="footer-link">Store location</Link>
              <Link className="footer-link">Return policy</Link>
              <Link className="footer-link">Support</Link>
            </div>
          </div>
          <div className="footer-column">
            <h4 className="title">Resources</h4>
            <div className="link-wrapper">
              <Link className="footer-link">Help center</Link>
              <Link className="footer-link">Store location</Link>
              <Link className="footer-link">Documentation</Link>
              <Link className="footer-link">Guidelines</Link>
            </div>
          </div>
          <div className="footer-column">
            <h4 className="title">Follow us on:</h4>
            <div className="social-media">
              <Link>
                <IconInsta />
              </Link>
              <Link>
                <IconYoutube />
              </Link>
              <Link>
                <IconTwitch />
              </Link>
              <Link>
                <IconTwitter />
              </Link>
            </div>
          </div>
        </div>
        <p className="copyright">© 2022 Exstore </p>
      </div>
    </div>
  );
};

export default FooterSection;
