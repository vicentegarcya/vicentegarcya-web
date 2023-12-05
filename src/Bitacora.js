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
        <Link className="post" to={"/bitacora/2"}>
          <p>[02] A mi yo niño</p>
          <img alt="arrow" src={arrowLink}></img>
        </Link>
        <Link className="post" to={"/bitacora/3"}>
          <p>[03] Ese límite no es tuyo</p>
          <img alt="arrow" src={arrowLink}></img>
        </Link>
        <Link className="post" to={"/bitacora/4"}>
          <p>[04] Romanticismo</p>
          <img alt="arrow" src={arrowLink}></img>
        </Link>
        <Link className="post" to={"/bitacora/5"}>
          <p>[05] Masculinidad</p>
          <img alt="arrow" src={arrowLink}></img>
        </Link>
        <Link className="post" to={"/bitacora/6"}>
          <p>[06] Perros Verdes</p>
          <img alt="arrow" src={arrowLink}></img>
        </Link>
        <Link className="post" to={"/bitacora/7"}>
          <p>[07] Pedir Ayuda</p>
          <img alt="arrow" src={arrowLink}></img>
        </Link>
        <Link className="post" to={"/bitacora/8"}>
          <p>[08] Recuperación</p>
          <img alt="arrow" src={arrowLink}></img>
        </Link>
        <Link className="post" to={"/bitacora/9"}>
          <p>[09] Ser (+) Valiente</p>
          <img alt="arrow" src={arrowLink}></img>
        </Link>
        <Link className="post" to={"/bitacora/10"}>
          <p>[10] Protagonista</p>
          <img alt="arrow" src={arrowLink}></img>
        </Link>
      </section>
      <BackHome />
    </div>
  );
}

export default Bitacora;
