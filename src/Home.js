import { useEffect, useRef, useState } from "react";
import "./Home.css";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import MetodologiaStep from "./components/MetodologiaStep/MetodologiaStep";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Footer from "./components/Footer/Footer";

function Home({ isLoading }) {
  gsap.registerPlugin(ScrollTrigger);

  const welcomeWrapper = useRef();
  const welcomeContentRef = useRef();
  const aboutSection = useRef();
  const projectsSection = useRef();
  const metodologiaSection = useRef();
  const firstMethod = useRef();
  const servicesSection = useRef();
  const footerRef = useRef();

  const [service, setService] = useState("front");

  function scrollToTop() {
    welcomeContentRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    /* ANIMATIONS */

    gsap.fromTo(
      welcomeWrapper.current,
      {
        opacity: 0.55,
      },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: welcomeWrapper.current,
          start: "bottom 95%",
          end: "bottom end",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      footerRef.current,
      {
        height: 0,
      },
      {
        height: "104.75vh",
        scrollTrigger: {
          trigger: servicesSection.current,
          start: "bottom 85%",
          end: "+=75%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="Home">
      <section className="welcome">
        <div ref={welcomeWrapper} className="welcome_wrapper"></div>
        <div ref={welcomeContentRef} className="welcome_content">
          <div
            className="welcome_content_left"
            style={{ maxHeight: isLoading ? 0 : "fit-content" }}
          >
            <p>
              Vicente Garcya. Creative <span>Web Developer</span> &{" "}
              <span>Digital</span> Experience <span>Crafter</span>.
            </p>
          </div>
          <div className="welcome_content_right">
            {/* <div
              onClick={() =>
                aboutSection.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <svg
                className="drawing_circle"
                width="664"
                height="271"
                viewBox="0 0 664 271"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M242.132 11.5428C222.082 9.31499 203.673 8.95366 183.287 11.7674C122.438 20.1664 32.4042 43.0787 7.31395 108.12C-14.2732 164.081 50.071 198.419 91.4262 214.131C147.256 235.342 242.881 252.248 299.405 258.826C357.557 265.594 461.312 271.194 521.982 264.666C579.346 258.493 636.21 241.914 656.068 182.687C683.636 100.468 595.19 64.1305 532.539 43.7728C444.807 15.2658 352.78 3.33725 260.774 3.00807C236.352 2.92069 206.463 3.36382 183.512 13.5642"
                  stroke="black"
                  stroke-width="5"
                  stroke-linecap="round"
                />
              </svg>
              <p>About</p>
            </div> */}
            <div
              onClick={() =>
                projectsSection.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <svg
                className="drawing_circle"
                width="664"
                height="271"
                viewBox="0 0 664 271"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M242.132 11.5428C222.082 9.31499 203.673 8.95366 183.287 11.7674C122.438 20.1664 32.4042 43.0787 7.31395 108.12C-14.2732 164.081 50.071 198.419 91.4262 214.131C147.256 235.342 242.881 252.248 299.405 258.826C357.557 265.594 461.312 271.194 521.982 264.666C579.346 258.493 636.21 241.914 656.068 182.687C683.636 100.468 595.19 64.1305 532.539 43.7728C444.807 15.2658 352.78 3.33725 260.774 3.00807C236.352 2.92069 206.463 3.36382 183.512 13.5642"
                  stroke="black"
                  stroke-width="5"
                  stroke-linecap="round"
                />
              </svg>
              <p>Projects</p>
            </div>
            <div
              onClick={() =>
                metodologiaSection.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              <svg
                className="drawing_circle"
                width="664"
                height="271"
                viewBox="0 0 664 271"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M242.132 11.5428C222.082 9.31499 203.673 8.95366 183.287 11.7674C122.438 20.1664 32.4042 43.0787 7.31395 108.12C-14.2732 164.081 50.071 198.419 91.4262 214.131C147.256 235.342 242.881 252.248 299.405 258.826C357.557 265.594 461.312 271.194 521.982 264.666C579.346 258.493 636.21 241.914 656.068 182.687C683.636 100.468 595.19 64.1305 532.539 43.7728C444.807 15.2658 352.78 3.33725 260.774 3.00807C236.352 2.92069 206.463 3.36382 183.512 13.5642"
                  stroke="black"
                  stroke-width="5"
                  stroke-linecap="round"
                />
              </svg>
              <p>Method</p>
            </div>
            <div
              onClick={() =>
                servicesSection.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <svg
                className="drawing_circle"
                width="664"
                height="271"
                viewBox="0 0 664 271"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M242.132 11.5428C222.082 9.31499 203.673 8.95366 183.287 11.7674C122.438 20.1664 32.4042 43.0787 7.31395 108.12C-14.2732 164.081 50.071 198.419 91.4262 214.131C147.256 235.342 242.881 252.248 299.405 258.826C357.557 265.594 461.312 271.194 521.982 264.666C579.346 258.493 636.21 241.914 656.068 182.687C683.636 100.468 595.19 64.1305 532.539 43.7728C444.807 15.2658 352.78 3.33725 260.774 3.00807C236.352 2.92069 206.463 3.36382 183.512 13.5642"
                  stroke="black"
                  stroke-width="5"
                  stroke-linecap="round"
                />
              </svg>
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
      <section ref={metodologiaSection} className="metodologia">
        <SectionTitle title="Method"></SectionTitle>
        <div className="metodologia_main">
          <MetodologiaStep
            ref={firstMethod}
            number={1}
            title="Briefing"
            description="We have a meeting where we meet each other and we understand
          the requirements of the project, the problems and the solutions :)"
            emojis={["✨", "🌱", "📬"]}
          ></MetodologiaStep>
          <MetodologiaStep
            number={2}
            title="Proposal"
            description="I propose different designs and I check with you if that's ok. Once you validate the design vibe and ideas, I'll make a final design to show yo how it would look like."
            emojis={["💻", "💍", "🤝"]}
          ></MetodologiaStep>
          <MetodologiaStep
            number={3}
            title="Crafting"
            description="I code the website delivering weekly updates so you can give me feedback and see how it's going. In this stage, I should receive the necessary content for the web."
            emojis={["🎩", "💡", "👨🏻‍🎨"]}
          ></MetodologiaStep>
          <MetodologiaStep
            number={4}
            title="Handoff"
            description="I put the web online and hand you over the documentation and the source code. We have an exit meeting where I'll explain you everyting and solve any doubt."
            emojis={["📦", "📓", "❤️"]}
          ></MetodologiaStep>
        </div>
      </section>
      <section ref={servicesSection} className="services">
        <SectionTitle title="Services"></SectionTitle>
        <div className="services_main">
          <div className="words">
            <p>
              <span
                className={service === "front" && "selected"}
                onClick={() => setService("front")}
              >
                ✺ FRONTEND DEVELOPMENT●
              </span>{" "}
              <span
                className={service === "fullstack" && "selected"}
                onClick={() => setService("fullstack")}
              >
                FULLSTACK DEVELOPMENT ✲
              </span>{" "}
              <span
                className={service === "service" && "selected"}
                onClick={() => setService("service")}
              >
                ▲SERVICE DESIGN
              </span>{" "}
              <span>UX/UI DESIGN◉</span>{" "}
              <span
                className={service === "copy" && "selected"}
                onClick={() => setService("copy")}
              >
                COPYWRITTING
              </span>
            </p>
          </div>
          <div className="packages">
            <div className="book_call_btns">
              <a
                href="https://cal.com/vicentegarcya/welcome-meeting"
                target="_blank"
                rel="noreferrer"
              >
                <p>
                  Book a Call{" "}
                  <span>
                    <i>(it's free)</i>
                  </span>
                </p>
                <p>
                  Book a Call{" "}
                  <span>
                    <i>(it's free)</i>
                  </span>
                </p>
              </a>
              <a
                href="https://cal.com/vicentegarcya/welcome-meeting"
                target="_blank"
                rel="noreferrer"
              >
                <p>
                  Book a Call{" "}
                  <span>
                    <i>(click me)</i>
                  </span>
                </p>
                <p>
                  Book a Call{" "}
                  <span>
                    <i>(click me)</i>
                  </span>
                </p>
              </a>
              <a
                href="https://cal.com/vicentegarcya/welcome-meeting"
                target="_blank"
                rel="noreferrer"
              >
                <p>
                  Book a Call{" "}
                  <span>
                    <i>(click me)</i>
                  </span>
                </p>
                <p>
                  Book a Call{" "}
                  <span>
                    <i>(click me)</i>
                  </span>
                </p>
              </a>
            </div>
            {service === "front" && (
              <div className="front_packages">
                <p>
                  <i>prices starting at 800€</i>
                </p>
                <div></div>
                <p>Product Landing Page</p>
                <p>Corporate Web</p>
                <p>Professional Portfolio</p>
                <p>Interactive Experience</p>
                <p>Browser Game</p>
                <p>HTML Email Templates</p>
              </div>
            )}
            {service === "fullstack" && (
              <div className="fullstack_packages">
                <p>
                  <i>prices starting at 4500€</i>
                </p>
                <div></div>
                <p>Ecommerce</p>
                <p>Web App</p>
                <p>Wordpress CSM</p>
                <p>Internal Application</p>
                <p>Custom Functionalities</p>
              </div>
            )}
            {service === "service" && (
              <div className="service_packages">
                <p>
                  <i>prices starting at 3000€</i>
                </p>
                <div></div>
                <p>Loren Ipsum haha</p>
                <p>Loren Ipsum</p>
                <p>Loren Ipsum he</p>
                <p>Loren Ipsum dfsdfsd</p>
              </div>
            )}
            {service === "copy" && (
              <div className="copy_packages">
                <p>
                  <i>prices starting at 300€</i>
                </p>
                <div></div>
                <p>Creative Copywriting</p>
                <p>Brand Storytelling</p>
                <p>SocialAds Copywriting</p>
                <p>Content Creation</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="footer_fake"></section>
      <div ref={footerRef} className="footer_wrapper">
        <Footer scrollTop={scrollToTop}></Footer>
      </div>
    </div>
  );
}

export default Home;
