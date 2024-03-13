import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            Discover the future of medical appointment booking with our innovative online platform. At DocSpot, we streamline the process, making it effortless to schedule appointments with healthcare professionals. With intuitive features and real-time availability updates, you can book check-ups, consultations, and urgent care appointments with ease. Say goodbye to long wait times and phone calls – join us today and take charge of your healthcare journey effortlessly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
