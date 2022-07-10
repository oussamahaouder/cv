import "./About.css";
import iconImage from "../../images/logo.jpg";

export const About = () => {
  return (
    <section className="container container-about">
      <div className="about-left">
        <span className="purple-text">
          ✋Haouder Oussama{" "}
          <span className="purple-smoke-text">- Intro</span>{" "}
        </span>
        <p className="gray-text">
         My name is Oussama and i am a web developer{" "}
        </p>
        <span className="white-text">
          <a href="">Portfolio</a>
        </span>
        <ul className="tech-stack">
          <li>Web Developer</li>
          <li>AI developer</li>
          <li>Backend Developer</li>
        </ul>
        <a className="about-see" href="#">More {"->"} </a>
      </div>
      <div className="about-right">
        <img src={iconImage} alt="" />
      </div>
    </section>
  );
};
