import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // const onClick = () => {};

  return (
    <nav className="navbar">
      <header className="navbar__heading">
        <span>Dev</span>challange.io
      </header>
      <ul className="navbar__link" key={1}>
        <Link to={"/input"}>
          <li className="navbar__link--item">Colors</li>
        </Link>
        <li className="navbar__link--item">Typography</li>
        <li className="navbar__link--item">Spaces</li>
        <Link to={"/"} key={1}>
          <li className="navbar__link--item ">Button</li>
        </Link>
        <li className="navbar__link--item">Input</li>
        <li className="navbar__link--item">Grid</li>
      </ul>
    </nav>
  );
}
