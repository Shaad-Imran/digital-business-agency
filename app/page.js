"use client";

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
} from "@/src/components";
import { motion, useAnimation } from "framer-motion";

export default function Home() {
  const controls = useAnimation();

  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />

      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--secondary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <OurDiff />
      </motion.div>

      <HowItWorks />

      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--primary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <WhoWeInvestIn />
      </motion.div>

      <Testimonials />
    </motion.div>
  );
}
