import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <section id="nav">
      <div className="main-nav">
        <div className="nav-links">
          {/* <Link to="/"> */}
          {/* </Link> */}
          <Link to="/">
            <nav>home</nav>
          </Link>
          {/* <Link to="/AboutMe"> */}
          <Link to="/AboutMe">
            <nav>about</nav>
          </Link>
          {/* </Link> */}
          {/* <Link to="/Projects"> */}
          {/* </Link> */}
          {/* <Link to='/Contact'><nav>contact</nav></Link> */}
          {/* <nav>resume</nav> */}
          <a href="https://www.linkedin.com/in/anthony-cortese/">
            {" "}
            <AiFillLinkedin className="icons" />
          </a>
          <a href="https://github.com/Anthony-Cortese">
            <AiFillGithub className="icons" />{" "}
          </a>
        </div>

        <div className="nav-icons"></div>
      </div>
    </section>
  );
}

export default Navbar;
