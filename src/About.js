import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about">
      <div className="about-info">
        <div className="about-title">
          <h3 className="about-name">Who am I?</h3>
        </div>

        <p className="about-para">
          I'm Anthony Cortese, I studied as a full-stack developer but have
          found my passion with the entire frontend landscape. I love to design,
          create, and make new things. I am passionate, and a highly motivated
          individual looking to carve my way into the tech field where I can
          showcase all my talents. I enjoy movies and television and I write and
          direct my own short independant films as a hobby!{" "}
        </p>
        <div className="email-div">
          <a className="email" href="mailto:anthonykcortese@gmail.com">
            CONTACT ME
          </a>
        </div>
      </div>

      <div className="about-img">
        <img
          className="tony"
          src="https://i.ibb.co/qjTtC6D/Portfolio.png"
          alt="Portfolio"
          border="0"
        />
      </div>
      <section id="copy-about">
        <div className="c-div">
          <img
            className="copy-img"
            src="https://i.ibb.co/vchsJQ0/Untitled.png"
            alt="spin"
          />
        </div>
        <p>Copyright © 2021 | Anthony Cortese</p>
      </section>
      {/* <Copyright /> */}
    </section>
  );
}

export default About;
