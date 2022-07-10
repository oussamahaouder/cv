import ReactTooltip from "react-tooltip";
import { BioDetails } from "../BioDetails/BioDetails";
import "./Bio.css";

export const Bio = () => {
  const bios = [
    {
      year: 2018,
      description: "Preparatory classes  ",
    },
    {
      year: 2022,
      description: "IT engineer in web Dev",
    },
    {
      year: 2022,
      description: "Starting the work on my web presence and Freelance",
    },
  ];

  return (
    <section className="container container-lines">
      <p className="purple-text">
        📚 Bio <span className="purple-smoke-text">My curriculum comprised of courses like Database Systems, Analysis of Algorithms, Web Technologies, Software Engineering, Networking, Specification and design of Graphical User interface has assisted me to gain profound knowledge in the field of Computer Science. I studied two years in preparatory classes , in which I learned basic mathematics and algorithmic processing .I am currently a fullstack web developer.</span>{" "}
      </p>
      <div className="line"></div>
      {bios.map((e) => (
        <div key={e.year} className="lines-items">
          <span className="white-text">{e.year}: </span>
          {""}
          <span className="gray-text" data-tip="React-tooltip">
            {e.description}
          </span>
          <ReactTooltip place="top" effects="float" className="custom-theme">
            <BioDetails />
          </ReactTooltip>
          <div className="line"></div>
        </div>
      ))}
    </section>
  );
};


