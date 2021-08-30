import React from "react";
import { NavLink} from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <header className="navbar__heading">
        <span>Dev</span>challange.io
      </header>
      <div className="navbar__link">
        <NavLink activeStyle={{ color: "#090f31" }} to={"/colors"}>
          Colors
        </NavLink>
        <NavLink activeStyle={{ color: "#090f31" }} to={"/typo"}>
          Typography
        </NavLink>
        <NavLink activeStyle={{ color: "#090f31" }} to={"/space"}>
          Spaces
        </NavLink>
        <NavLink activeStyle={{ color: "#090f31" }} to={"/button"}>
          Button
        </NavLink>
        <NavLink activeStyle={{ color: "#090f31" }} to={"/input"}>
          Input
        </NavLink>
        <NavLink activeStyle={{ color: "#090f31" }} to={"/grid"}>
          grid
        </NavLink>
      </div>
    </nav>
  );
}
