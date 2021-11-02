import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [click, setClick] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <section id="home">
      {/* <div className="contact-info">
        <h4 className="contact">Contact Me</h4>
      </div> */}
      <div className="fontpage-display">
        <h1 className="logo-1">H</h1>

        <h1 className="logo-1">E</h1>
      </div>
      <div className="fontpage-display1">
        <h1 className="logo-1">L</h1>

        <h1 className="logo-1">L</h1>
        <div className="shine">
          <div className="inner">
            <div className="color">
              <div className="akc-div">
                <img
                  className="akc-img"
                  src="https://i.postimg.cc/vHFM0F4w/IMG-2685.jpg"
                  border="0"
                  alt="IMG-2685"
                  onClick={handleClick}
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                />
                {isShown && (
                  <div
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    className="show-page"
                  >
                    <div className="new-image">
                      <img
                        className="new-img"
                        src="https://i.postimg.cc/vHFM0F4w/IMG-2685.jpg"
                        border="0"
                        alt="IMG-2685"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <h1 className="logo-1">.</h1>
      </div>
      <div className="name-info">
        <h4 className="my-name">
          I'm Anthony Cortese a Full-Stack Web Developer based in Provo, UT
        </h4>
      </div>
      {/* <div className="akc-div">
        <img
          className="akc-img"
          src="https://i.postimg.cc/vHFM0F4w/IMG-2685.jpg"
          border="0"
          alt="IMG-2685"
        />
      </div> */}
      {/* <div className="name">
        <span className="first">Anthony</span>
      </div>
      <div className="name1">
        <span className="middle">Kennedy</span>
      </div>
      <div className="name2">
        <span className="last">Cortese</span>
      </div> */}

      {/* <div className="img-div">
        <img
          className="home-img"
          src="https://i.postimg.cc/7Z8GvmRY/Untitled-AKC.png"
          border="0"
          alt="Untitled-AKC"
        />
      </div>

      <div className="threeD">
        <h2 className="fe"> Front-End Web Developer</h2>
      </div> */}

      {/* <div className="perspective-text">
          <div className="perspective-line">
            <p></p>
            <p>Anthony</p>
          </div>
          <div className="perspective-line">
            <p>Anthony</p>
            <p>Cortese</p>
          </div>
          <div className="perspective-line">
            <p></p>
            <p>Frontend</p>
          </div>
          <div className="perspective-line">
            <p>Developer</p>
            <p>Developer</p>
          </div>
          <div className="perspective-line">
            <p>Web Developer</p>
            <p></p>
          </div>
          <div className="perspective-line">
            <p>Web Developer</p>
            <p></p>
          </div>
          <div className="perspective-line">
            <p>Web Developer</p>
            <p></p>
          </div>
        </div> */}

      {/* <img
          className="home-img"
          src="https://i.postimg.cc/Zn2L4VyR/portfolio-tony.png"
          border="0"
          alt="portfolio-tony"
        /> */}
    </section>
  );
}

export default Home;
