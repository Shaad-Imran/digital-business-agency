"use client";

import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (window.innerWidth < 1200) {
      setNavStyle("sticky");
    } else if (window.innerWidth > 1200 && latest > 0.2) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  });

  return (
    <header className={`n-wrapper ${navStyle}`}>
      {/* Desktop version */}
      <nav className="container">
        <div className="n-container">
          {/* Left side */}
          <h3 className="n-logo">InnoHub</h3>

          {/* Right side */}
          <div className="n-right">
            <ul className="n-menu">
              <li>
                <ScrollLink to="wwd" spy={true} smooth={true}>
                  What we do
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="hiw" spy={true} smooth={true}>
                  How it works
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="wwi" spy={true} smooth={true}>
                  Who we invest in
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="testimonial" spy={true} smooth={true}>
                  Testimonials
                </ScrollLink>
              </li>
            </ul>

            <button className="fund-button">Get Funded</button>
          </div>
        </div>
      </nav>

      {/* Mobile/tab version */}
      <div className="nm-container">
        {/* Logo */}
        <h3>InnoHub</h3>

        {/* Menu icon */}
        {!mobileMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}

        {/* Mobile menu */}
        <ul
          className="nm-menu"
          style={{
            transform: mobileMenuOpened && "translateX(0%)",
          }}
        >
          <li>
            <ScrollLink
              onClick={() => setMobileMenuOpened(false)}
              to="wwd"
              spy={true}
              smooth={true}
            >
              What we do
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={() => setMobileMenuOpened(false)}
              to="hiw"
              spy={true}
              smooth={true}
            >
              How it works
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={() => setMobileMenuOpened(false)}
              to="wwi"
              spy={true}
              smooth={true}
            >
              Who we invest in
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={() => setMobileMenuOpened(false)}
              to="testimonial"
              spy={true}
              smooth={true}
            >
              Testimonials
            </ScrollLink>
          </li>
          <li>
            <div className="m-fund-button">get funded</div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
