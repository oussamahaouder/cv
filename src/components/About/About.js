import "./About.css";
import iconImage from "../../images/logo.jpg";

export const About = () => {
  return (
    <section className="container container-about">
      <div className="about-left">
        <span className="purple-text">✋Luis Cutiopala </span>
        <p>
          Empece en el mundo del desarrollo cuando tenia 14 años jugando con c++
          creando juegos en la terminal, cuando descubri el desarrollo web
          empece con las tecnologias basicas cono html, css y javascript
          actualmente trabajo con <span className="white-text">Reactjs</span> y{" "}
          <span className="white-text">Nodejs</span>
        </p>
        <a href="">See work</a>
      </div>
      <div className="about-right">
        <img src={iconImage} alt="" />
      </div>
    </section>
  );
};
