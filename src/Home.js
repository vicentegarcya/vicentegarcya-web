import { useRef } from "react";
import "./Home.css";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

function Home() {
  const aboutSection = useRef();
  const projectsSection = useRef();

  return (
    <div className="Home">
      <section className="welcome">
        <div className="welcome_wrapper"></div>
        <div className="welcome_wrapper_plant"></div>
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
            </div>
            <div
              onClick={() =>
                projectsSection.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <p>Projects</p>
            </div>
            <div
              onClick={() =>
                aboutSection.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <p>How I work</p>
            </div>
            <div
              onClick={() =>
                aboutSection.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <p>Services</p>
            </div>
          </div>
        </div>
      </section>
      <section ref={aboutSection} className="about">
        <SectionTitle title="About"></SectionTitle>
        <div className="about_main">
          <div className="about_text">
            <p>
              I have 3+ years of experience creating websites and digital
              experiences. I love working on soulful projects that are willing
              to try new ideas and solutions.
            </p>
            <p>
              Technologies I commonly use: SCSS, Javascript (ES6), React,
              NextJS, Wordpress, GSAP, NodeJS, MongoDB, Figma.
            </p>
            <p>
              I am a very sensitive and empathetic person, and I love working
              with people who are just as passionate about creating as I am.
            </p>
          </div>
          <div className="about_bubbles">
            <Link to={"/bitacora"}>My Writings</Link>
            <a
              href="https://savee.it/vicentegarcya/"
              target="_blank"
              rel="noreferrer"
            >
              Inspo
            </a>
            <a
              href="https://mailchi.mp/cad3bc2e7c34/despertar-creativo"
              target="_blank"
              rel="noreferrer"
            >
              Newsletter Fav
            </a>
            <a
              href="https://open.spotify.com/playlist/5GWpa19ufMdY94SDjBQwA7?si=1d868ff17cc2468e"
              target="_blank"
              rel="noreferrer"
            >
              My Playlist
            </a>
            <a
              href="https://www.disney.es/peliculas/soul"
              target="_blank"
              rel="noreferrer"
            >
              Movie Fav
            </a>
            <a
              href="https://www.britannica.com/plant/daisy"
              target="_blank"
              rel="noreferrer"
            >
              My Flower
            </a>
            <a
              href="https://open.spotify.com/playlist/5GWpa19ufMdY94SDjBQwA7?si=1d868ff17cc2468e"
              target="_blank"
              rel="noreferrer"
            >
              My Playlist
            </a>
            <a
              href="https://open.spotify.com/playlist/5GWpa19ufMdY94SDjBQwA7?si=1d868ff17cc2468e"
              target="_blank"
              rel="noreferrer"
            >
              My Playlist
            </a>
          </div>
        </div>
      </section>
      <section ref={projectsSection} className="projects">
        <SectionTitle title="Selected Projects"></SectionTitle>
        <div className="projects_grid">
          <div>
            <div className="keywords">
              <div className="video_wrapper"></div>
              <p>Corporate Website</p>
              <p>Javascript(ES6)</p>
              <p>React</p>
              <p>NextJS</p>
              <p>GSAP</p>
            </div>
            <div>
              <p>jimenagonzalez.in</p>
              <p>001</p>
            </div>
          </div>
          <div>
            <div className="keywords">
              <div className="video_wrapper"></div>
              <p>Product Landing Page</p>
              <p>Javascript(ES6)</p>
              <p>React</p>
              <p>NextJS</p>
              <p>GSAP</p>
            </div>
            <div>
              <p>la belleza de la oscuridad</p>
              <p>002</p>
            </div>
          </div>
          <div>
            <div className="keywords">
              <div className="video_wrapper"></div>
              <p>Browser Game</p>
              <p>Javascript(ES6)</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>Canvas</p>
            </div>
            <div>
              <p>elon jump</p>
              <p>003</p>
            </div>
          </div>
          <div>
            <div className="keywords">
              <div className="video_wrapper"></div>
              <p>Web App</p>
              <p>Javascript (ES6)</p>
              <p>React</p>
              <p>NextJs</p>
              <p>NodeJs</p>
              <p>MongoDB</p>
            </div>
            <div>
              <p>senseat</p>
              <p>004</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
