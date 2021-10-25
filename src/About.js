import React from "react";
import "./About.css";
import Copyright from "./Copyright";

function About() {
  return (
    <section id="about">
      <div className="about-info">
        <h3>Anthony Cortese</h3>
        <p>This is all about me...</p>
        <div className="email-div">
          <a className="email" href="mailto:anthonykcortese@gmail.com">
            anthonykcortese@gmail.com
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
