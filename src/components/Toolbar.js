import React from "react";
import LogoGenially from "./LogoGenially";

function Toolbar() {
  return (
    <div className="toolbar">
      <LogoGenially />
      <button>Add Box</button>
      <button>Remove Box</button>
      <input type="color" />
      <span>No boxes selected</span>
    </div>
  );
}

export default Toolbar;
