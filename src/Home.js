import { useRef } from "react";
import "./Home.css";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

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
        <SectionTitle title="About"></SectionTitle>
        <div className="about_main">
          <div className="about_text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              facilisis elit non dui consequat convallis. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
            <p>
              Sed lorem diam, porta vitae blandit id, iaculis a libero. Mauris
              maximus vestibulum turpis eget efficitur. Vivamus tempor quam id
              nisl mattis molestie.
            </p>
            <p>
              Sed lacinia, justo et molestie finibus, eros dui tristique metus,
              at commodo felis augue ut eros.
            </p>
          </div>
          <div className="about_bubbles">
            <Link to={"/bitacora"}>Mis textos</Link>
            <a href="https://savee.it/vicentegarcya/" target="_blank" rel="noreferrer">Inspo</a>
            <a href="https://mailchi.mp/cad3bc2e7c34/despertar-creativo" target="_blank" rel="noreferrer">Newsletter Fav</a>
            <a href="https://open.spotify.com/playlist/5GWpa19ufMdY94SDjBQwA7?si=1d868ff17cc2468e" target="_blank" rel="noreferrer">My Playlist</a>
            <a href="https://www.disney.es/peliculas/soul" target="_blank" rel="noreferrer">Movie Fav</a>
            <a href="https://www.britannica.com/plant/daisy" target="_blank" rel="noreferrer">My Flower</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
