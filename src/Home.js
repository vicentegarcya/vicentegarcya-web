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
  const secondMethod = useRef();
  const thirdMethod = useRef();
  const fourthMethod = useRef();
  const servicesSection = useRef();
  const footerRef = useRef();

  const jimenaRef = useRef();
  const bosRef = useRef();
  const elonRef = useRef();
  const senseatRef = useRef();

  const [service, setService] = useState("front");
  const [isDesplegado, setIsDesplegado] = useState();

  function scrollToTop() {
    welcomeContentRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    firstMethod.current.addEventListener('click', () => setIsDesplegado('first'));
    secondMethod.current.addEventListener('click', () => setIsDesplegado('second'));
    thirdMethod.current.addEventListener('click', () => setIsDesplegado('third'));
    fourthMethod.current.addEventListener('click', () => setIsDesplegado('fourth'));
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
            end: "+=40%",
            scrub: 2,
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
          scrub: 2,
        },
      }
    );

    /* PROJECTS */
    gsap.fromTo(
      jimenaRef.current,
      {
        scale: 0,
        x: -400,
      },
      {
        scale: 1,
        x: 0,
        scrollTrigger: {
          trigger: projectsSection.current,
          start: "20% bottom",
          end: "+=50%",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      bosRef.current,
      {
        scale: 0,
        x: 400,
      },
      {
        scale: 1,
        x: 0,
        scrollTrigger: {
          trigger: projectsSection.current,
          start: "30% bottom",
          end: "+=40%",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      elonRef.current,
      {
        scale: 0,
        y: 400,
      },
      {
        scale: 1,
        y: 0,
        scrollTrigger: {
          trigger: projectsSection.current,
          start: "70% bottom",
          end: "+=40%",
          scrub: 2,
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
          scrub: 2,
        },
      }
    );

    /* METHOD */

    gsap.fromTo(
      metodologiaSection.current.querySelector(
        ".metodologia_main > div:nth-child(2)"
      ),
      {
        yPercent: -100,
      },
      {
        yPercent: 0,
        scrollTrigger: {
          trigger: metodologiaSection.current,
          start: "40% bottom",
          end: "+=40%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      metodologiaSection.current.querySelector(
        ".metodologia_main > div:nth-child(3)"
      ),
      {
        yPercent: -200,
      },
      {
        yPercent: 0,
        scrollTrigger: {
          trigger: metodologiaSection.current,
          start: "45% bottom",
          end: "+=40%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      metodologiaSection.current.querySelector(
        ".metodologia_main > div:nth-child(4)"
      ),
      {
        yPercent: -250,
      },
      {
        yPercent: 0,
        scrollTrigger: {
          trigger: metodologiaSection.current,
          start: "47.5% bottom",
          end: "+=40%",
          scrub: 1,
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
          scrub: 2,
        },
      }
    );
  }, [isDesplegado]);

  return (
    <div ref={welcomeContentRef} className="Home">
      <section className="welcome">
        {/* <div ref={welcomeWrapper} className="welcome_wrapper"></div> */}
        <div className="welcome_content">
          <div
            className="welcome_content_left"
            style={{ maxHeight: isLoading ? 0 : "fit-content" }}
          >
            <p>
              Creative <span>web developer</span> and designer crafting digital
              experiences for <span>heart-driven people & brands</span>. I believe in the
              power of <span>building together</span> ☺︎
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
            <Link to={"/bitacora"}>blog</Link>
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
            ></a>
            <a
              href="https://open.spotify.com/playlist/5GWpa19ufMdY94SDjBQwA7?si=1d868ff17cc2468e"
              target="_blank"
              rel="noreferrer"
            >
              <iframe
                title="spotify-frame"
                style={{ borderRadius: "12px !important", border: "none" }}
                src="https://open.spotify.com/embed/playlist/5GWpa19ufMdY94SDjBQwA7?utm_source=generator&theme=0"
                width="100%"
                height="85%"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </a>
            <a
              href="https://www.disney.es/peliculas/soul"
              target="_blank"
              rel="noreferrer"
            >
              movie fav
            </a>
            <a
              href="https://www.alianzaeditorial.es/libro/adn-alianza-de-novelas/el-clamor-de-los-bosques-adn-richard-powers-9788491814443/"
              target="_blank"
              rel="noreferrer"
            >
              book fav
            </a>
            <a
              href="https://cafeamorperfecto.com/products/frida-kahlo-luisa-guaragna"
              target="_blank"
              rel="noreferrer"
            >
              coffee fav
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
            number="01"
            title="Briefing"
            description="A quick 15 minute call where we meet each other. Here you can tell me all about the project, as I gather the requirements and start to wrap my head around the challenges and possible solutions."
            isFirst={true}
            isDesplegado={isDesplegado === 'first'}
            onClick={() => setIsDesplegado('first')}
          ></MetodologiaStep>
          <MetodologiaStep
            ref={secondMethod}
            number="02"
            title="Proposal"
            description="I work on a proposal for your project, with scope, budget and timeframe. We explore different ideas for the look & feel and the possible web experience."
            emojis={["💍", "💍", "💍"]}
            isDesplegado={isDesplegado === 'second'}
            onClick={() => setIsDesplegado('second')}
          ></MetodologiaStep>
          <MetodologiaStep
            ref={thirdMethod}
            number="03"
            title="Crafting"
            description="Here comes the magic: the designing and coding of your digital experience. We get together on a weekly basis for co-creating and giving feedback in a 1 hour meeting."
            emojis={["💻", "💻", "💻"]}
            isDesplegado={isDesplegado === 'third'}
            onClick={() => setIsDesplegado('third')}
          ></MetodologiaStep>
          <MetodologiaStep
            ref={fourthMethod}
            number="04"
            title="Handoff"
            description="Here your web is ready to go live! I put it online and hand you over the source code and documentation. In a 90-minute exit meeting, we go over everything together, as I solve any question that may arise."
            emojis={["📦", "📦", "📦"]}
            isDesplegado={isDesplegado === 'fourth'}
            onClick={() => setIsDesplegado('fourth')}
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
                    <i>(let's meet)</i>
                  </span>
                </p>
                <p>
                  Book a Call{" "}
                  <span>
                    <i>(let's meet)</i>
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
                    <i>(tell me about your need)</i>
                  </span>
                </p>
                <p>
                  Book a Call{" "}
                  <span>
                    <i>(tell me about your need)</i>
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
