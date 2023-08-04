import React, { useState } from "react";
import { addBox, removeAllBox, removeSelectedBox } from "../events/boxEvents.js";
import { BiUndo, BiRedo } from "react-icons/bi";
import LogoGenially from "./LogoGenially.js";

function Toolbar() {
  const [color, setColor] = useState("#000f33");
  return (
    <div className="toolbar">
      <span id={"msjSelected"}>
        <u>Selected:</u>&nbsp;none
      </span>
      <div className="row">
        <LogoGenially />
        <button onClick={addBox}>Add box</button>
        <button onClick={removeSelectedBox}>Remove selected box</button>
        <button className="all-remove" onClick={removeAllBox}>
          Remove all box
        </button>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <BiUndo className="btn" />
        <BiRedo className="btn" />
      </div>
    </div>
  );
}

export default Toolbar;
