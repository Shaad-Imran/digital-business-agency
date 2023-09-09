"use client";

import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  });

  return (
    <div className={`n-wrapper ${navStyle}`}>
      {/* desktop version  */}
      <div className="container">
        <div className="n-container">
          {/* left side  */}
          <div className="n-logo">
            <span>InnoHub</span>
          </div>

          {/* right side  */}
          <div className="n-right">
            <div className="n-menu">
              <ScrollLink to="wwd" spy={true} smooth={true}>
                <span>What we do</span>
              </ScrollLink>
              <ScrollLink to="hiw" spy={true} smooth={true}>
                <span>How it works</span>
              </ScrollLink>
              <ScrollLink to="wwi" spy={true} smooth={true}>
                <span>Who we invest in</span>
              </ScrollLink>
              <ScrollLink to="testimonial" spy={true} smooth={true}>
                <span>Testimonials</span>
              </ScrollLink>
            </div>

            <div className="fund-button">get funded</div>
          </div>
        </div>
      </div>

      {/* mobile/tab version  */}
      <div className="nm-container">
        {/* logo */}
        <span>InnoHub</span>

        {/* menu icon  */}
        {!mobileMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}

        {/*  mobile menu */}
        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpened && "translateX(0%)" }}
        >
          <ScrollLink
            onClick={() => setMobileMenuOpened(false)}
            to="wwd"
            spy={true}
            smooth={true}
          >
            <span>What we do</span>
          </ScrollLink>
          <ScrollLink
            onClick={() => setMobileMenuOpened(false)}
            to="hiw"
            spy={true}
            smooth={true}
          >
            <span>How it works</span>
          </ScrollLink>
          <ScrollLink
            onClick={() => setMobileMenuOpened(false)}
            to="wwi"
            spy={true}
            smooth={true}
          >
            <span>Who we invest in</span>
          </ScrollLink>
          <ScrollLink
            onClick={() => setMobileMenuOpened(false)}
            to="testimonial"
            spy={true}
            smooth={true}
          >
            <span>Testimonials</span>
          </ScrollLink>

          <div className="m-fund-button">get funded</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
