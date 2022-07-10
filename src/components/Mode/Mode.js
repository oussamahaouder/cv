import "./Mode.css";
import { RiSunFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";

export default function Mode({ handleModeChange }) {
  return (
    <section className=" container-mode">
      <div className="mode-left white-text">
        <ul>
          <li>
            <a href="">Works</a>
          </li>
          {/*           <li className="left-source">
            <AiFillGithub className="source-icon" />
            Source
          </li> */}
          <li>
            <a target="_blank" href="https://github.com/oussamahaouder">
              <span class="link-decoration">Source</span>
              <span class="icon-change">
                <img
                  src="https://cdn.sanity.io/images/tljndwv6/production/182744b0662c24bb7d37846566bdb7ebee3470d6-15x15.svg"
                  alt="External Link"
                />
                <img
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />
              </span>
            </a>
          </li>
          <li>
            <a href="">Me</a>
          </li>
        </ul>
      </div>
      <button onClick={handleModeChange} className="container-icon">
        <RiSunFill className="mode-icon" />
      </button>
    </section>
  );
}
