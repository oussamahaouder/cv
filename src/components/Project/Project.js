import React from "react";
import "./Project.css";
import Line from "../../images/line-purple.svg";
import ImageTemp from "../../images/sappsd.png";
import FigmaIcon from "../../images/figma-icon.svg";

function Project() {
  return (
    <section className="container container-project">
      <p className="purple-text">
        ‍💻 Open Source -
        <span className="purple-smoke-text">My best project </span>{" "}
      </p>
      <div className="project-header">
        <div className="project-box">
          <span className="white-text">Open source E-commerce app</span>
          <p className="gray-text text-box">
           Using ReactJs and node js as backend i created a template application for e-commerce using stripe as a payment method
          </p>
        </div>
        <img className="project-line" src={Line} alt="abajo" />
      </div>
      <div className="project-details">
        <img src={ImageTemp} alt="Project React Simple Portfolio" />
        <div className="details-left">
          <br/>
          <p className="gray-text">
           I mostly work on web applications
           
          </p>
          <div className="details-stack">
            <span className="white-text">Technologies</span>
            <ul className="gray-text">
              <li>Reactjs</li>
              <li>Angular</li>
              <li>Nodejs</li>
              <li>Java</li>
            </ul>
          </div>
         

        </div>
      </div>
    </section>
  );
}

export default Project;
