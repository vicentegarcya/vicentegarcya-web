import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer({ scrollTop }) {
  return (
    <div className="footer">
      <div className="footer_top">
        <div>
          <button onClick={() => scrollTop()}>Back to Top</button>
        </div>
        <p>Let's create together</p>
        <div>
          <a
            href="https://www.instagram.com/vicentegarcya/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/vicentegarcya/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <Link to={"/bitacora"}>Bitácora</Link>
        </div>
      </div>
      <div className="footer_bottom">
        <a href="mailto:vicentegarciaayllon@gmail.com">
          <p>CONTACT☺︎</p>
          <p>CONTACT☺︎</p>
        </a>
      </div>
    </div>
  );
}
