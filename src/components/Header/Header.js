import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [isUnfolded, setIsUnfolded] = useState(false);

  return (
    <div className="Header">
      {!isUnfolded ? (
        <>
          <a href="mailto:vicentegarciaayllon@gmail.com">Contact</a>
          <div onClick={() => setIsUnfolded(!isUnfolded)}>Menu</div>
        </>
      ) : (
        <div className="header_unfolded">
          <div onClick={() => setIsUnfolded(!isUnfolded)}></div>
          <div className="unfolded_links">
            <Link onClick={() => setIsUnfolded(!isUnfolded)} to={"/"}>
              Home
            </Link>
            <Link onClick={() => setIsUnfolded(!isUnfolded)} to={"/"}>About</Link>
            <Link onClick={() => setIsUnfolded(!isUnfolded)} to={"/"}>Projects</Link>
            <Link onClick={() => setIsUnfolded(!isUnfolded)} to={"/"}>Services</Link>
            <Link onClick={() => setIsUnfolded(!isUnfolded)} to={"/bitacora"}>Bitácora</Link>
          </div>
          <div>
            <a href="https://www.instagram.com/vicentegarcya/" target="_blank" rel="noreferrer">Instagram</a>
            <p>2023©</p>
          </div>
        </div>
      )}
    </div>
  );
}
