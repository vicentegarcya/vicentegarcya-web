import { useRef } from "react";
import "./Home.css";

function Home() {
  const aboutSection = useRef();

  return (
    <div className="Home">
      <section className="welcome">
        <div className="welcome_wrapper"></div>
        <div className="welcome_content">
          <div className="welcome_content_left">
            <p>
              Vicente Garcya. Creative <span>Web Developer</span> &{" "}
              <span>Digital</span> Experience <span>Crafter</span>.
            </p>
          </div>
          <div className="welcome_content_right">
            <div
              onClick={() =>
                aboutSection.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <p>About</p>
              <p>Click</p>
            </div>
            <div
              onClick={() =>
                aboutSection.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <p>Projects</p>
              <p>Click</p>
            </div>
            <div
              onClick={() =>
                aboutSection.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <p>How I work</p>
              <p>Click</p>
            </div>
            <div
              onClick={() =>
                aboutSection.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <p>Services</p>
              <p>Click</p>
            </div>
          </div>
        </div>
      </section>
      <section ref={aboutSection} className="about">
      </section>
    </div>
  );
}

export default Home;
