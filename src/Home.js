import { useEffect, useRef, useState } from "react";
import "./Home.css";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Footer from "./components/Footer/Footer";

function Home({ isLoading }) {
  gsap.registerPlugin(ScrollTrigger);

  const welcomeContentRef = useRef();
  const aboutSection = useRef();
  const projectsSection = useRef();
  const metodologiaSection = useRef();
  const servicesSection = useRef();
  const footerRef = useRef();

  const firstMethod = useRef();
  const secondMethod = useRef();
  const thirdMethod = useRef();
  const fourthMethod = useRef();

  const jimenaRef = useRef();
  const bosRef = useRef();
  const elonRef = useRef();
  const senseatRef = useRef();

  const servicesBtns = useRef();

  const [service, setService] = useState("front");
  const [currentMethod, setCurrentMethod] = useState(1);

  function scrollToTop() {
    welcomeContentRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function servicesCarousel() {
    setTimeout(() => setService("fullstack"), 5000);
    setTimeout(() => setService("service"), 10000);
    setTimeout(() => setService("copy"), 15000);
    setTimeout(() => setService("front"), 20000);
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
      firstMethod.current,
      {
        scale: 0,
      },
      {
        scale: 1,
        scrollTrigger: {
          trigger: metodologiaSection.current,
          start: "40% bottom",
          end: "+=40%",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      secondMethod.current,
      {
        scale: 0,
      },
      {
        scale: 1,
        scrollTrigger: {
          trigger: metodologiaSection.current,
          start: "40% bottom",
          end: "+=40%",
          scrub: 3,
        },
      }
    );
    gsap.fromTo(
      thirdMethod.current,
      {
        scale: 0,
      },
      {
        scale: 1,
        scrollTrigger: {
          trigger: metodologiaSection.current,
          start: "40% bottom",
          end: "+=40%",
          scrub: 5,
        },
      }
    );
    gsap.fromTo(
      fourthMethod.current,
      {
        scale: 0,
      },
      {
        scale: 1,
        scrollTrigger: {
          trigger: metodologiaSection.current,
          start: "40% bottom",
          end: "+=40%",
          scrub: 7,
        },
      }
    );

    /* SERVICES */

    gsap.fromTo(
      servicesBtns.current.querySelectorAll("a"),
      {
        scale: 0,
      },
      {
        scale: 1,
        scrollTrigger: {
          trigger: servicesSection.current,
          start: "50% bottom",
          end: "+=50%",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      servicesSection.current.querySelectorAll(".packages > .front_packages"),
      {
        y: 500,
      },
      {
        y: 0,
        scrollTrigger: {
          trigger: servicesSection.current,
          start: "60% bottom",
          end: "+=25%",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      servicesSection.current.querySelector(".words"),
      {
        opacity: 0,
        x: -500,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: servicesSection.current,
          start: "50% bottom",
          end: "+=45%",
          scrub: 2,
          onEnter: () => servicesCarousel(),
          once: true,
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
  }, []);

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
              experiences for <span>heart-driven people & brands</span>. I
              believe in the power of <span>building together</span> ☺︎
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
      <section ref={aboutSection} id="about" className="about">
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
            >
              {" "}
            </a>
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
      <section ref={projectsSection} id="projects" className="projects">
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
          <div className="method_left">
            <div>
              <div className="method_numbers">
                <button
                  ref={firstMethod}
                  style={{ color: currentMethod === 1 ? "#282c32" : "#dbdbdb" }}
                  onClick={() => setCurrentMethod(1)}
                >
                  01
                </button>
                <button
                  ref={secondMethod}
                  style={{ color: currentMethod === 2 ? "#282c32" : "#dbdbdb" }}
                  onClick={() => setCurrentMethod(2)}
                >
                  02
                </button>
                <button
                  ref={thirdMethod}
                  style={{ color: currentMethod === 3 ? "#282c32" : "#dbdbdb" }}
                  onClick={() => setCurrentMethod(3)}
                >
                  03
                </button>
                <button
                  ref={fourthMethod}
                  style={{ color: currentMethod === 4 ? "#282c32" : "#dbdbdb" }}
                  onClick={() => setCurrentMethod(4)}
                >
                  04
                </button>
              </div>
              <div className="method_arrows">
                <div>
                  <div
                    className="method_plus"
                    onClick={() => {
                      if (currentMethod < 4) {
                        setCurrentMethod(currentMethod + 1);
                      }
                    }}
                  >
                    <span>(next)</span>
                  </div>
                  <div
                    className="method_less"
                    onClick={() => {
                      if (currentMethod > 1) {
                        setCurrentMethod(currentMethod - 1);
                      }
                    }}
                  >
                    <span>(previous)</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
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
            </div>
          </div>
          <div className="method_right">
            <div className="method_titles">
              <>
                {currentMethod === 1 && <p>Briefing</p>}
                {currentMethod === 2 && <p>Proposal</p>}
                {currentMethod === 3 && <p>Crafting</p>}
                {currentMethod === 4 && <p>Handoff</p>}
                <div>
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
                </div>
              </>
            </div>
            {currentMethod === 1 && (
              <p>
                A quick 15 minute call where we meet each other.<br></br>
                <br></br> Here you can tell me all about the project, as I
                gather the requirements and start to wrap my head around the
                challenges and possible solutions.
              </p>
            )}
            {currentMethod === 2 && (
              <p>
                I work on a proposal for your project, with scope, budget and
                timeframe.<br></br>
                <br></br> We explore different ideas for the look & feel and the
                possible web experience.
              </p>
            )}
            {currentMethod === 3 && (
              <p>
                Here comes the magic: the designing and coding of your digital
                experience.<br></br>
                <br></br> We get together on a weekly basis for co-creating and
                giving feedback in a 1 hour meeting.
              </p>
            )}
            {currentMethod === 4 && (
              <p>
                Your web is ready to go live! I put it online and hand you over
                the source code and documentation.<br></br>
                <br></br> In a 90-minute exit meeting, we go over everything
                together, as I solve any question that may arise.
              </p>
            )}
          </div>
        </div>
      </section>
      <section ref={servicesSection} id="services" className="services">
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
                className={service === "front" ? "selected" : undefined}
                onClick={() => setService("front")}
              >
                ✺ FRONTEND DEVELOPMENT●
              </span>{" "}
              <span
                className={service === "fullstack" ? "selected" : undefined}
                onClick={() => setService("fullstack")}
              >
                FULLSTACK DEVELOPMENT ✲
              </span>{" "}
              <span
                className={service === "service" ? "selected" : undefined}
                onClick={() => setService("service")}
              >
                ▲SERVICE DESIGN
              </span>{" "}
              <span>UX/UI DESIGN◉</span>{" "}
              <span
                className={service === "copy" ? "selected" : undefined}
                onClick={() => setService("copy")}
              >
                COPYWRITING
              </span>
            </p>
          </div>
          <div className="packages">
            <div ref={servicesBtns} className="book_call_btns">
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
                  <i>prices starting at 400€</i>
                </p>
                <div></div>
                <p>Service Strategy</p>
                <p>User Experience Design</p>
                <p>Service and Product Design</p>
                <p>Project Management</p>
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
