import React from "react";
import "./WhoWeInvestIn.css";
import { whoWeInvest } from "@/src/utils/data";
import { motion } from "framer-motion";
import {
  containerVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animation";

const WhoWeInvestIn = () => {
  return (
    <section className="wwi-wrapper" id="wwi">
      <div className="container">
        <div className="wwi-container">
          {/* left side */}
          <div className="wwi-left">
            <div className="head">
              <motion.span
                variants={tagVariants}
                initial="offscreen"
                whileInView={"onscreen"}
                className="tag"
              >
                Who we invest in
              </motion.span>
              <motion.span
                variants={titleVariants}
                initial="offscreen"
                whileInView={"onscreen"}
                className="title"
              >
                Digital Businesses
                <br /> With Early Traction
              </motion.span>

              {/* features  */}
              <div className="wwi-features">
                {whoWeInvest.map((feature, i) => (
                  <motion.div
                    variants={containerVariants(i * 0.05 + 1)}
                    initial="offscreen"
                    whileInView={"onscreen"}
                    className="wwi-feature"
                    key={i}
                  >
                    <span className="des">{feature.title}</span>
                    <span className="text">{feature.des}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* right side  */}
          <div className="wwi-right">
            <motion.img
              variants={containerVariants(0.5)}
              initial="offscreen"
              whileInView={"onscreen"}
              src="persons.png"
              alt="person"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeInvestIn;
