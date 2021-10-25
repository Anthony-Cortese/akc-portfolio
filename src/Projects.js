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
          <h1 className="clone">IMDb Clone</h1>
          {/* <a className="Link" href="https://akc-imdb.netlify.app/"> */}
          <span className="Link-title">
            IMDb is my favorite website that I use daily, so I decided to build
            it out from scratch which you could call "my version". The website
            has a fully functional navigation bar, each button will take you to
            a new page. The play buttons will bring up a trailer on click, and
            on the IMDbTV page will do the same if you click on the movie
            poster. The website is fully responsive, and with a horizontal
            scroll the images will change-- and a final fun fact on the Coming
            Soon To Theatres section are 3 short films that I have personally
            directed!
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

      <div className="family-promise1">
        <div className="movie-div">
          <img
            className="data-img"
            src="https://i.postimg.cc/Vvj16mNH/Screen-Shot-2021-10-12-at-12-08-58-AM.png"
            border="0"
            alt="Screen-Shot-2021-10-12-at-12-08-58-AM"
          />
        </div>
        <div className="family-info">
          <h1 className="fp-text">AKC's Movie Database</h1>
          <a className="Link2" href="https://akc-moviedatabase.netlify.app/">
            <span className="Link-title2">
              This was the first project I personally built out on my own. I
              used two different API's to get the correct information I wanted
              for my movie database. You are able to search for any movie title,
              and you will recieve the release date, rating, and the plot based
              on that movie!
            </span>
          </a>
          <div className="view">
            <a href="https://github.com/Anthony-Cortese/AKC-Movie-Database">
              <AiFillGithub className="icons" />{" "}
            </a>
            <a href="https://akc-moviedatabase.netlify.app/">
              <CgScreen className="icons" />{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
