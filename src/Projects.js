import React from "react";
import { CgScreen } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects">
      <div className="projects-title">
        <h1 className="h-projects">P</h1>
        <h1 className="h-projects">R</h1>
        <h1 className="h-projects">O</h1>
        <h1 className="h-projects">J</h1>
        <h1 className="h-projects">E</h1>
        <h1 className="h-projects">C</h1>
        <h1 className="h-projects">T</h1>
        <h1 className="h-projects">S</h1>
      </div>

      <div className="family-promise1">
        <div className="movie-div">
          <img
            className="data-img"
            src="https://i.postimg.cc/gkJ3XK9J/Screen-Shot-2021-11-09-at-2-54-42-AM.png"
            border="0"
            alt="Screen-Shot-2021-11-09-at-2-54-42-AM"
          />
        </div>
        <div className="family-info">
          <h1 className="fp-text">Lucky Penny</h1>
          <span className="Link-title2">
            Implemented with React and drawing data from a third-party API,
            Lucky Penny connects users with a penny selected to bring them luck!
            After arrival at the landing page, users select a month/day
            combination and are directed to a page where they can access events
            and births from their selection. After specifying a year, the user
            is taken to a page where they can learn all about the penny minted
            in that year and can optionally choose to purchase their very own
            lucky penny.
          </span>
          <div className="view">
            <a href="https://github.com/Tony-Naj/Lucky-Penny">
              <AiFillGithub className="icons" />{" "}
            </a>
            <a href="https://lucky-penny.netlify.app/">
              <CgScreen className="icons" />{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="imdb">
        <div className="imdb-img-div">
          <img
            className="imdb-logo"
            src="https://i.postimg.cc/3rXxDhSY/Screen-Shot-2021-10-07-at-5-45-17-PM.png"
            border="0"
            alt="Screen-Shot-2021-10-07-at-5-45-17-PM"
          />
        </div>
        <div className="imdb-info">
          <h1 className="clone">AKC-IMDb</h1>
          {/* <a className="Link" href="https://akc-imdb.netlify.app/"> */}
          <span className="Link-title">
            Built fully with React and CSS, I created my own version of the IMDb
            website from scratch sprinkling in some of my favorite films and
            celebrities from the entertainment world. This website has a fully
            functional navigation bar, where each button will take you to a new
            completely fleshed out page on the application. The play buttons on
            the homepage will light up yellow on hover, and with a click will
            open up a trailer as a modal. On the IMDBtv page, and using a
            third-party API, users are able to navagate through various new
            release films based on their favorite genres and are able to see a
            trailer by clicking on a movie poster! This is a fully responsive
            web application and a final fun fact on the Coming Soon To Theatres
            section there are 3 short films that I personally directed!
          </span>
          {/* </a> */}
          <div className="screen">
            <a href="https://github.com/Anthony-Cortese/IMDb-Clone">
              <AiFillGithub className="icons" />{" "}
            </a>
            <a href="https://akc-imdb.netlify.app/">
              <CgScreen className="icons" />{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="family-promise">
        <div className="fp-img">
          <img
            className="family-img"
            src="https://i.postimg.cc/90VnrK1F/Screen-Shot-2021-10-07-at-10-04-05-PM.png"
            border="0"
            alt="Screen-Shot-2021-10-07-at-5-31-56-PM"
          />
        </div>

        <div className="family-info">
          <h1 className="fp-text">Family Promise</h1>
          {/* <a
            className="Link1"
            href="https://www.figma.com/proto/iM4t3H148ndBvVf8WmkTuO/Family-Promise?node-id=24%3A10&starting-point-node-id=24%3A10&scaling=scale-down"
          > */}
          <span className="Link-title1">
            Family Promise is a non-profit organization geared to help homeless
            people get off the street and into self-reliant, sustainable
            situations. One of the ways they accomplish that mission is by
            offering a variety of services. This app was a tracker for services
            offered, and a tool for various positions at the organization to see
            recipients of services, what stage in their journey they were on
            what other services they were eligible for and much more.
          </span>
          {/* </a> */}

          <div className="view">
            <a href="https://github.com/Lambda-School-Labs/family-promise-service-tracker-fe-a">
              <AiFillGithub className="icons" />{" "}
            </a>
            <a href="https://www.figma.com/proto/iM4t3H148ndBvVf8WmkTuO/Family-Promise?node-id=24%3A10&starting-point-node-id=24%3A10&scaling=scale-down">
              <CgFigma className="icons" />{" "}
            </a>{" "}
            <a href="www.familypromise.com">
              <CgScreen className="icons" />{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
