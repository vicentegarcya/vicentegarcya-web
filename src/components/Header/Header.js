import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header({ isLoading }) {
  const [isUnfolded, setIsUnfolded] = useState(false);

  return (
    <div className="Header">
      <div
        className="header_folded"
        style={{ maxHeight: isLoading ? 0 : "fit-content" }}
      >
        <Link to={"/"}>
          vicentegarcya
        </Link>
        <div className="header_folded_links">
          <a href="mailto:hola@vicentegarcya.com">
            contact<span>(click)</span>
          </a>
          <div onClick={() => setIsUnfolded(!isUnfolded)}>
            menu<span>(click)</span>
          </div>
        </div>
      </div>
      {isUnfolded && (
        <div className="header_unfolded">
          <div onClick={() => setIsUnfolded(!isUnfolded)}></div>
          <div className="unfolded_links">
            <Link onClick={() => setIsUnfolded(!isUnfolded)} to={"/"}>
              Home
            </Link>
            <Link onClick={() => setIsUnfolded(!isUnfolded)} to={"/#about"}>
              About
            </Link>
            <Link onClick={() => setIsUnfolded(!isUnfolded)} to={"/#projects"}>
              Projects
            </Link>
            <Link onClick={() => setIsUnfolded(!isUnfolded)} to={"/#services"}>
              Services
            </Link>
            <Link onClick={() => setIsUnfolded(!isUnfolded)} to={"/bitacora"}>
              Bitácora
            </Link>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/vicentegarcya/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin<span>(click)</span>
            </a>
            <p>2023©</p>
          </div>
        </div>
      )}
    </div>
  );
}
