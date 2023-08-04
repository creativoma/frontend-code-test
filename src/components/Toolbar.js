import React from "react";
import {
  addBox,
  removeAllBox,
  removeSelectedBox,
  changeColor,
} from "../events/boxEvents.js";
import { BiUndo, BiRedo } from "react-icons/bi";
import LogoGenially from "./LogoGenially.js";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="row">
        <p id={"idBoxSelected"}>
          <u>Id selected:</u>&nbsp;<span>none</span>
        </p>
        <p id={"quantityBoxSelected"}>
          <u>Box selected:</u>&nbsp;<span>0</span>
        </p>
      </div>
      <div className="row">
        <LogoGenially />
        <button onClick={addBox}>Add box</button>
        <button onClick={removeSelectedBox}>Remove selected box</button>
        <button className="all-remove" onClick={removeAllBox}>
          Remove all box
        </button>
        <input type="color" value="#000f33" onChange={changeColor} />
        <BiUndo className="btn" />
        <BiRedo className="btn" />
      </div>
    </div>
  );
};

export default Toolbar;
