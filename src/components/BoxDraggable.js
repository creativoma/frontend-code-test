import React from "react";
import { observer } from "mobx-react";
import { selectBox } from "../events/events.js";

function BoxDraggable(props) {
  return (
    <div
      id={props.id}
      className="box"
      style={{
        backgroundColor: props.color,
        width: props.width,
        height: props.height,
        transform: `translate(${props.left}px, ${props.top}px)`,
        border: props.selected ? ".4rem dotted white" : "none",
        boxSizing: "border-box",
      }}
      onClick={() => selectBox(props.id)}
    >
      {props.children}
    </div>
  );
}

export default observer(BoxDraggable);
