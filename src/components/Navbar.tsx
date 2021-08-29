import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <header className="navbar__heading">
        <span>Dev</span>challange.io
      </header>

      <ul className="navbar__link">
        <li className="navbar__link--item">Colors</li>
        <li className="navbar__link--item">Typography</li>
        <li className="navbar__link--item">Spaces</li>
        <li className="navbar__link--item">Button</li>
        <li className="navbar__link--item">Input</li>
        <li className="navbar__link--item">Grid</li>
      </ul>
    </nav>
  );
}
