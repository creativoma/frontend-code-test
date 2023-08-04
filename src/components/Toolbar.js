import React from "react";
import { BiUndo, BiRedo } from "react-icons/bi";
import { MdOutlineCleaningServices } from "react-icons/md";
import LogoGenially from "./LogoGenially.js";
import {
  addBox,
  removeAllBox,
  removeSelectedBox,
  changeColor,
  undo,
  redo,
  storageClear,
} from "../events/Events.js";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="row">
        <p id={"idBoxSelected"}>-</p>
        <p id={"quantityBoxSelected"}>0</p>
      </div>
      <div className="row">
        <LogoGenially />
        <button onClick={addBox}>Add box</button>
        <button onClick={removeSelectedBox}>Remove selected box</button>
        <button className="all-remove" onClick={removeAllBox}>
          Remove all box
        </button>
        <input type="color" value="#000f33" onChange={changeColor} />
        <BiUndo className="btn" onClick={undo} />
        <BiRedo className="btn" onClick={redo} />
        <MdOutlineCleaningServices className="btn cleaner" onClick={storageClear} />
      </div>
    </div>
  );
};

export default Toolbar;
