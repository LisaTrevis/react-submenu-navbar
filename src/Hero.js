import React from "react";
import headShot from "./images/HeadShot.jpeg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-images">
          <img src={headShot} className="headshot-img" alt="head shot" />
        </article>
        <article className="hero-info">
          <h1>Welcome</h1>
          <p>
            With a prior background in Sales, Marketing & Account Management, I
            approach each project from the user point of view. A combination of
            logical thinking and artistic flair provides delightful UI/UX with
            elegant, functional, and reusable code behind the scenes. I'm
            passionate about learning, and pick up new languages, libraries,
            frameworks, and skills quickly.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Hero;
