import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          DocSpot <br />
          Instant Health Connections at Your Fingertips
        </h1>
        <p>
        "Nurturing Health, Embracing Vitality: Your Pathway to Purposeful Living."
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
