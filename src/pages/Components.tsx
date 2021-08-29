import React from "react";
import ButtonList from "../components/ButtonList";
import Navbar from "../components/Navbar";

export default function Components() {
  return (
    <div className="main">
      <div className="main__nav">
        <Navbar />
      </div>
      <div className="main-body">
        <ButtonList />
      </div>
    </div>
  );
}
