import { useRef } from "react";
import "./Home.css";

function Home() {
  const aboutSection = useRef();

  return (
    <div className="Home">
      <section className="welcome">
        <img alt="Vicente working"></img>
        <div className="welcome_wrapper"></div>
        <div className="welcome_content">
          <div className="welcome_content_left">
            <p>
              Vicente Garcya. Creative <span>Web Developer</span> & <span>Digital</span> Experience <span>Crafter</span>.
            </p>
          </div>
          <div className="welcome_content_right">
            <div onClick={() => aboutSection.current.scrollIntoView({ behavior: "smooth" })}>About</div>
            <div /*onClick={() => aboutSection.current.scrollIntoView({ behavior: "smooth" })}*/>Projects</div>
            <div /*onClick={() => aboutSection.current.scrollIntoView({ behavior: "smooth" })}*/>How I work</div>
            <div /*onClick={() => aboutSection.current.scrollIntoView({ behavior: "smooth" })}*/>Services</div>
          </div>
        </div>
      </section>
      <section ref={aboutSection} className="about">
      hola about
      </section>
    </div>
  );
}

export default Home;
