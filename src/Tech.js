import React from "react";
import "./Tech.css";

function Tech() {
  return (
    <section id="tech">
      <div className="tech-title">
        <h1 className="t-projects">M</h1>
        <h1 className="t-projects">Y</h1>
        <h1 className="t-projects"> - </h1>
        <h1 className="t-projects">T</h1>
        <h1 className="t-projects">E</h1>
        <h1 className="t-projects">C</h1>
        <h1 className="t-projects">H</h1>
        {/* <h1 className="h-projects">O</h1>
        <h1 className="h-projects">G</h1>
        <h1 className="h-projects">I</h1>
        <h1 className="h-projects">E</h1>
        <h1 className="h-projects">S</h1> */}
      </div>
      <div className="language">
        <div className="frontend">
          <span className="tech">Javascript</span>
          <span className="tech">React JS</span>
          <span className="tech">HTML(5)</span>
          <span className="tech">Redux</span>
          <span className="tech">CSS(3)</span>
          {/* <span>
              Tailwind CSS</li>
            </span>
            <span>
              <li>Bootstrap(4)</li>
            </span>
            <span>
              <li>Jest</li>
            </span> */}
          {/* <li>React Testing Library</li> */}
          {/* <li>Cypress</li> */}
        </div>
        <div className="backend">
          <span className="tech">Express</span>
          <span className="tech">Node JS</span>
          <span className="tech">Python</span>
          <span className="tech">PostgreSQL</span>
          {/* <li>Restful Web Services</li> */}
          {/* <li>Api | Ajax</li>
            <li>CRUD</li>
            <li>Knex</li>
            <li>SQL</li> */}
          <span className="tech">SQLite(3)</span>
        </div>
        <div className="design">
          <span className="tech">Premiere Pro</span>
          <span className="tech">Photoshop</span>
          <span className="tech">Illustrator</span>
          <span className="tech">XD</span>
          <span className="tech">Figma</span>
          <span className="tech">Whimsical</span>
          {/* <li>Docker</li> */}
          {/* <li>Agile Workflow</li> */}
        </div>
      </div>
    </section>
  );
}

export default Tech;
