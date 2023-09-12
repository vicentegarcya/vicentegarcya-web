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

  const welcomeContentRef = useRef();
  const aboutSection = useRef();
  const projectsSection = useRef();
  const metodologiaSection = useRef();
  const firstMethod = useRef();
  const servicesSection = useRef();
  const footerRef = useRef();

  const jimenaRef = useRef();
  const bosRef = useRef();
  const elonRef = useRef();
  const senseatRef = useRef();

  const [service, setService] = useState("front");

  function scrollToTop() {
    welcomeContentRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    /* ANIMATIONS */
    /* ABOUT */

    gsap
      .fromTo(
        aboutSection.current.querySelector(".about_text"),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: aboutSection.current,
            start: "50% bottom",
            end: "+=90%",
            scrub: true,
          },
        }
      )
      .timeScale(5);

    gsap.fromTo(
      aboutSection.current.querySelectorAll(".about_bubbles > *"),
      {
        scale: 0,
      },
      {
        scale: 1,
        scrollTrigger: {
          trigger: aboutSection.current,
          start: "50% bottom",
          end: "+=50%",
          scrub: true,
        },
      }
    );

    /* PROJECTS */
    gsap.fromTo(
      jimenaRef.current,
      {
        scale: 0,
        x: -400
      },
      {
        scale: 1,
        x:0,
        scrollTrigger: {
          trigger: projectsSection.current,
          start: "20% bottom",
          end: "+=50%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      bosRef.current,
      {
        scale: 0,
        x: 400
      },
      {
        scale: 1,
        x:0,
        scrollTrigger: {
          trigger: projectsSection.current,
          start: "30% bottom",
          end: "+=40%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      elonRef.current,
      {
        scale: 0,
        y: 400
      },
      {
        scale: 1,
        y:0,
        scrollTrigger: {
          trigger: projectsSection.current,
          start: "70% bottom",
          end: "+=40%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      senseatRef.current,
      {
        scale: 0,
      },
      {
        scale: 1,
        scrollTrigger: {
          trigger: projectsSection.current,
          start: "70% bottom",
          end: "+=40%",
          scrub: true,
        },
      }
    );

    /* FOOTER */

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
        {/* <div ref={welcomeWrapper} className="welcome_wrapper"></div> */}
        <div ref={welcomeContentRef} className="welcome_content">
          <div
            className="welcome_content_left"
            style={{ maxHeight: isLoading ? 0 : "fit-content" }}
          >
            <p>
              Creative web developer and designer crafting digital experiences
              for heart-driven brands. I believe in the power of building and
              growing together ☺︎
            </p>
          </div>
          <div className="welcome_content_right">
            {!isLoading && <div className="welcome_image"></div>}
            <div
              className="welcome_content_right_links"
              style={{ maxHeight: isLoading ? 0 : "fit-content" }}
            >
              <div
                onClick={() =>
                  aboutSection.current.scrollIntoView({ behavior: "smooth" })
                }
                style={{ height: isLoading ? 0 : "fit-content" }}
              >
                <p>
                  About<span>(1)</span>
                </p>
                <p>
                  About<span>(1)</span>
                </p>
                <p>
                  About<span>(1)</span>
                </p>
                <p>
                  About<span>(1)</span>
                </p>
                <p>
                  About<span>(1)</span>
                </p>
              </div>
              <div
                onClick={() =>
                  projectsSection.current.scrollIntoView({ behavior: "smooth" })
                }
                style={{ height: isLoading ? 0 : "fit-content" }}
              >
                <p>
                  Works<span>(2)</span>
                </p>
                <p>
                  Works<span>(2)</span>
                </p>
                <p>
                  Works<span>(2)</span>
                </p>
                <p>
                  Works<span>(2)</span>
                </p>
                <p>
                  Works<span>(2)</span>
                </p>
              </div>
              <div
                onClick={() =>
                  metodologiaSection.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                style={{ height: isLoading ? 0 : "fit-content" }}
              >
                <p>
                  Method<span>(3)</span>
                </p>
                <p>
                  Method<span>(3)</span>
                </p>
                <p>
                  Method<span>(3)</span>
                </p>
                <p>
                  Method<span>(3)</span>
                </p>
                <p>
                  Method<span>(3)</span>
                </p>
              </div>
              <div
                onClick={() =>
                  servicesSection.current.scrollIntoView({ behavior: "smooth" })
                }
                style={{ height: isLoading ? 0 : "fit-content" }}
              >
                <p>
                  Services<span>(4)</span>
                </p>
                <p>
                  Services<span>(4)</span>
                </p>
                <p>
                  Services<span>(4)</span>
                </p>
                <p>
                  Services<span>(4)</span>
                </p>
                <p>
                  Services<span>(4)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={aboutSection} className="about">
        <SectionTitle
          title={
            <p>
              About<span>(1)</span>
            </p>
          }
        ></SectionTitle>
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
            <Link to={"/bitacora"}>my writings</Link>
            <a
              href="https://savee.it/vicentegarcya/"
              target="_blank"
              rel="noreferrer"
            >
              inspo
            </a>
            <a
              href="https://mailchi.mp/cad3bc2e7c34/despertar-creativo"
              target="_blank"
              rel="noreferrer"
            >
              newsletter fav
            </a>
            <a
              href="https://open.spotify.com/playlist/5GWpa19ufMdY94SDjBQwA7?si=1d868ff17cc2468e"
              target="_blank"
              rel="noreferrer"
            >
              playlist
            </a>
            <a
              href="https://www.disney.es/peliculas/soul"
              target="_blank"
              rel="noreferrer"
            >
              movie fav
            </a>
            <a
              href="https://www.britannica.com/plant/daisy"
              target="_blank"
              rel="noreferrer"
            >
              flower fav
            </a>
            <a
              href="https://open.spotify.com/playlist/5GWpa19ufMdY94SDjBQwA7?si=1d868ff17cc2468e"
              target="_blank"
              rel="noreferrer"
            >
              prueba
            </a>
            <a
              href="https://open.spotify.com/playlist/5GWpa19ufMdY94SDjBQwA7?si=1d868ff17cc2468e"
              target="_blank"
              rel="noreferrer"
            >
              prueba
            </a>
          </div>
        </div>
      </section>
      <section ref={projectsSection} className="projects">
        <SectionTitle
          title={
            <p>
              Selected Works<span>(2)</span>
            </p>
          }
        ></SectionTitle>
        <div className="projects_grid">
          <div ref={jimenaRef}>
            <div className="keywords">
              <div className="video_wrapper"></div>
              <p>Corporate Website</p>
              <p>Javascript(ES6)</p>
              <p>React</p>
              <p>NextJS</p>
              <p>GSAP</p>
            </div>
            <div>
              <p>001</p>
              <p>jimenagonzalez.in</p>
            </div>
          </div>
          <div ref={bosRef}>
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
          <div ref={elonRef}>
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
          <div ref={senseatRef}>
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
        <SectionTitle
          title={
            <p>
              Method<span>(3)</span>
            </p>
          }
        ></SectionTitle>
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
        <SectionTitle
          title={
            <p>
              Services<span>(4)</span>
            </p>
          }
        ></SectionTitle>
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
