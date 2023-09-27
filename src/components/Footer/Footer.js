import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer({ scrollTop }) {
  return (
    <div className="footer">
      <div className="footer_top">
        <div>
          <button onClick={() => scrollTop()}>
            back to top<span>(click)</span>
          </button>
        </div>
        <div>
          <p>+34 684 003 481</p>
          <a
            style={{ textAlign: "end" }}
            href="mailto:hola@vicentegarcya.com"
          >
            hola@vicentegarcya.com
          </a>
          <div>
            <a
              href="https://www.instagram.com/vicentegarcya/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram<span>(click)</span>,
            </a>
            <a
              href="https://www.linkedin.com/in/vicentegarcya/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin<span>(click)</span>
            </a>
          </div>
        </div>
        <div>
          <p style={{ textAlign: "end" }}>
            -2.1361500<br></br>40.0749200
          </p>
          <Link to={"/bitacora"}>Bitácora<span>(click)</span></Link>
          <p>© 2023</p>
        </div>
      </div>
      <div className="footer_bottom">
        <a href="mailto:hola@vicentegarcya.com">
          <p>CONTACT☺︎</p>
          <p>CONTACT☺︎</p>
        </a>
      </div>
      <div>✺ Designed and coded by (you guessed it right) Vicente Garcya.</div>
    </div>
  );
}
