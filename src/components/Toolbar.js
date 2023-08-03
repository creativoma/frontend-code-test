import React, { useState } from "react";
import { addBox, removeBox } from "../events/events.js";
import LogoGenially from "./LogoGenially";
import { BiUndo, BiRedo } from "react-icons/bi";

function Toolbar() {
  const [color, setColor] = useState("#525fff");

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
      <BiUndo className="btn" />
      <BiRedo className="btn" />
      <span>No boxes selected</span>
    </div>
  );
}

export default Toolbar;
