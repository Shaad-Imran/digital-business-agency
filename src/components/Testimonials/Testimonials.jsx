import React from "react";
import "./Testimonial.css";
import { SlickSlider } from "..";

const Testimonials = () => {
  return (
    <section className="t-wrapper" id="testimonial">
      <div className="container">
        <div className="t-container">
          <div className="t-head">
            <span className="tag">Testimonials</span>
            <span className="title">
              Access Capital That Complements Traditional Funding Options
            </span>
            <span className="des">What people say about us</span>
          </div>
        </div>

        {/* slider  */}
        <SlickSlider />
      </div>
    </section>
  );
};

export default Testimonials;
