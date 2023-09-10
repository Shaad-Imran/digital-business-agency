import React from "react";
import "./Footer.css";
import { EmailBox } from "..";

const Footer = () => {
  return (
    <footer className="f-wrapper">
      <div className="container">
        <div className="f-container">
          <span className="title">Get Funded Today!</span>
          <EmailBox />
          <hr />
          <ul className="f-menu">
            <li>Home</li>
            <li>what we do</li>
            <li>how it works</li>
            <li>who we invest in</li>
            <li>testimonials</li>
          </ul>
          <hr />
          <span className="text">Made with 🤍 by Shaad Imran</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
