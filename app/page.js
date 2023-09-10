"use client";

import React from "react";
import "./page.css";
import {
  Navbar,
  Hero,
  BrandingVideo,
  WhatWeDo,
  OurDiff,
  HowItWorks,
  WhoWeInvestIn,
  Testimonials,
  Footer,
} from "@/src/components";
import { motion, useAnimation } from "framer-motion";

export default function Home() {
  const controls = useAnimation();

  // Function to handle background color animation
  const handleBackgroundColorChange = async (color) => {
    await controls.start({
      backgroundColor: color,
    });
  };

  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />

      {/* OurDiff component */}
      <motion.div
        onViewportEnter={() => handleBackgroundColorChange("#00CCFA")}
        onViewportLeave={() => handleBackgroundColorChange("#ffffff")}
        viewport={{ amount: 0.4 }}
      >
        <OurDiff />
      </motion.div>

      <HowItWorks />

      {/* WhoWeInvestIn component */}
      <motion.div
        onViewportEnter={() =>
          handleBackgroundColorChange("rgba(85, 65, 216, 1)")
        }
        onViewportLeave={() =>
          handleBackgroundColorChange("rgba(255, 255, 255, 1)")
        }
        viewport={{ amount: 0.4 }}
      >
        <WhoWeInvestIn />
      </motion.div>

      <Testimonials />
      <Footer />
    </motion.div>
  );
}
