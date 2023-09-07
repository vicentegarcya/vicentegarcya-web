import { useState } from "react";
import "./MetodologiaStep.css";
import { animated, useSpring } from "@react-spring/web";

export default function MetodologiaStep({ number, title, description, emojis }) {
  const [isDesplegado, setIsDesplegado] = useState(false);

  const openAnimation = useSpring({
    from: { maxHeight: "25%", marginBottom: "0rem" },
    to: {
      maxHeight: isDesplegado ? "500px" : "0",
      marginBottom: isDesplegado ? "1rem" : "0rem",
    },
    config: { duration: "300" },
  });

  const rotateCross = useSpring({
    from: { x: 0 },
    to: { x: 45 },
  });

  return (
    <div className="metodologia_step">
      <animated.div style={openAnimation}>
        <p>
          <span>
            <i>{number}.</i>
          </span>{" "}
          {title}
        </p>
        <p>{description}</p>
      </animated.div>
      <div>
        {emojis.map((emoji, index) => {
          return <div>{emoji}</div>;
        })}
      </div>
      <animated.div
        style={
          !isDesplegado
            ? { transform: rotateCross.x.to((value) => `rotate(${value}deg)`) }
            : undefined
        }
        onClick={() => setIsDesplegado(!isDesplegado)}
      ></animated.div>
    </div>
  );
}
