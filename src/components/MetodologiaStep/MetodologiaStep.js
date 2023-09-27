import "./MetodologiaStep.css";
import { animated, useSpring } from "@react-spring/web";
import { forwardRef } from "react";

const MetodologiaStep = forwardRef(function MetodologiaStep(
  { number, title, description, isFirst, emojis, isDesplegado },
  ref
) {
  const parentColor = useSpring({
    from: { backgroundColor: "f8f8f8" },
    to: {
      backgroundColor: isDesplegado ? "#e3ffe1" : "f8f8f8",
    },
  });

  const openAnimation = useSpring({
    from: { maxHeight: "25%", marginBottom: "0rem" },
    to: {
      maxHeight: isDesplegado ? "500px" : "0",
      marginBottom: isDesplegado ? "1rem" : "0rem",
    },
  });

  const emojisStyle = useSpring({
    from: {
      filter: "contrast(150%) grayscale(60%) brightness(70%)",
    },
    to: {
      filter: isDesplegado
        ? "contrast(100%) grayscale(0%) brightness(100%)"
        : "contrast(150%) grayscale(60%) brightness(70%)",
    },
  });

  const rotateCross = useSpring({
    from: { x: 0 },
    to: { x: 45 },
  });

  return (
    <animated.div style={parentColor} ref={ref} className="metodologia_step">
      <animated.div style={openAnimation}>
        <p>
          <span>{number}</span> {title}
        </p>
        <p>{description}</p>
      </animated.div>
      {isFirst ? (
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
      ) : (
        <animated.div style={emojisStyle}>
          {emojis.map((emoji, index) => {
            return <div key={index}>{emoji}</div>;
          })}
        </animated.div>
      )}
      <animated.div
        style={
          !isDesplegado
            ? { transform: rotateCross.x.to((value) => `rotate(${value}deg)`) }
            : undefined
        }
      ></animated.div>
    </animated.div>
  );
});

export default MetodologiaStep;
