import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <div href="mailto:anthonykcortese@gmail.com" className="con-title">
        <h1 className="con">C</h1>
        <h1 className="con">O</h1>
        <h1 className="con">N</h1>
        <h1 className="con">T</h1>
        <h1 className="con">A</h1>
        <h1 className="con">C</h1>
        <h1 className="con">T</h1>
        <h1 className="con">-</h1>
        <h1 className="con">M</h1>
        <h1 className="con">E</h1>
      </div>
      <div className="links">
        {/* <a className="resume" href="">
          My Resume
        </a> */}
        <a className="email" href="mailto:anthonykcortese@gmail.com">
          anthonykcortese@gmail.com
        </a>
      </div>
    </section>
  );
}

export default Contact;
