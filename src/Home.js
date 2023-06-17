import "./Home.css";
import arrowLink from "../src/images/up-right-arrow.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <section className="contact">
        <p>
          I'm a sensitive web developer & designer creating deep and emotional
          experiences.
        </p>
        <a href="mailto:vicentegarciaayllon@gmail.com">click here</a>
      </section>
      <section className="projects">
        <div className="project">
          <p
            onClick={() =>
              window.open("https://www.labellezadelaoscuridad.com/")
            }
          >
            project [01]
          </p>
          <img alt="arrow" src={arrowLink}></img>
        </div>
        <div className="project">
          <p onClick={() => window.open("https://fckcss.netlify.app/")}>
            project [02]
          </p>
          <img alt="arrow" src={arrowLink}></img>
        </div>
        <div className="project">
          <p
            onClick={() =>
              window.open("https://vicentegarcya.github.io/elon-jump/")
            }
          >
            project [03]
          </p>
          <img alt="arrow" src={arrowLink}></img>
        </div>
      </section>
      <section className="footer">
        <p
          onClick={() =>
            window.open("https://www.instagram.com/vicentegarcya/")
          }
        >
          INSTAGRAM
        </p>
        <p><Link to={"/bitacora"}>BITÁCORA</Link></p>
        <a href="mailto:vicentegarciaayllon@gmail.com">CONTACT</a>
      </section>
    </div>
  );
}

export default Home;
