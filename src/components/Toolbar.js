import React from "react";
import { addBox, removeAllBox, removeSelectedBox, changeColor } from "../events/boxEvents.js";
import { BiUndo, BiRedo } from "react-icons/bi";
import LogoGenially from "./LogoGenially.js";

function Toolbar() {
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
          value="#000f33"
          onChange={changeColor}
        />
        <BiUndo className="btn" />
        <BiRedo className="btn" />
      </div>
    </div>
  );
}

export default Toolbar;
