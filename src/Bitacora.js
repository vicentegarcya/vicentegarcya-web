import { Link } from "react-router-dom";
import arrowLink from "../src/images/up-right-arrow.png";
import "./Bitacora.css";
import BackHome from "./components/BackHome/BackHome";

function Bitacora() {
  return (
    <div className="Bitacora">
      <h1 className="title">BITÁCORA</h1>
      <section className="posts">
        <Link className="post" to={"/bitacora/1"}>
          <p>[01] Gracias Auri</p>
          <img alt="arrow" src={arrowLink}></img>
        </Link>
      </section>
      <BackHome />
    </div>
  );
}

export default Bitacora;
