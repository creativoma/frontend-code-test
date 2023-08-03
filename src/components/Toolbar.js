import React, { useState } from "react";
import { addBox, removeBox } from "../events/BoxEvents.js";
import LogoGenially from "./LogoGenially";

function Toolbar() {
  const [color, setColor] = useState("#221ab2");

  return (
    <div className="toolbar">
      <LogoGenially />
      <button onClick={addBox}>Add Box</button>
      <button onClick={removeBox}>Remove Box</button>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <span>No boxes selected</span>
    </div>
  );
}

export default Toolbar;
