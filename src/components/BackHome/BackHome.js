import { Link } from "react-router-dom";
import arrowLink from "../../images/up-right-arrow.png";
import "./BackHome.css";

function BackHome() {
  return (
    <Link className="BackHome" to={"/"}>
      <img alt="arrow" src={arrowLink}></img>
      <p>home</p>
    </Link>
  );
}

export default BackHome;
