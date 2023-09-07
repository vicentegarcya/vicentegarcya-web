import { useState } from "react";
import "./MetodologiaStep.css";
import { animated, useSpring } from "@react-spring/web";
import { forwardRef } from "react";

const MetodologiaStep = forwardRef(function MetodologiaStep({
  number,
  title,
  description,
  emojis,
}, ref) {
  const [isDesplegado, setIsDesplegado] = useState(false);

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
    <div
      ref={ref}
      className="metodologia_step"
      onClick={() => setIsDesplegado(!isDesplegado)}
    >
      <animated.div style={openAnimation}>
        <p>
          <span>
            <i>{number}.</i>
          </span>{" "}
          {title}
        </p>
        <p>{description}</p>
      </animated.div>
      <animated.div style={emojisStyle}>
        {emojis.map((emoji, index) => {
          return <div key={index}>{emoji}</div>;
        })}
      </animated.div>
      <animated.div
        style={
          !isDesplegado
            ? { transform: rotateCross.x.to((value) => `rotate(${value}deg)`) }
            : undefined
        }
      ></animated.div>
    </div>
  );
});

export default MetodologiaStep;
