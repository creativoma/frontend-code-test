import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react";
import { selectBox } from "../events/boxEvents.js";
import { boxDragging } from "./Interact.js";

const BoxDraggable = (props) => {
  const ref = useRef(null);

  useEffect(() => {
    boxDragging(ref, props.id, props.left, props.top);
  }, [props]);

  return (
    <div
      id={props.id}
      ref={ref}
      className="box"
      style={{
        width: props.width,
        height: props.height,
        boxSizing: "border-box",
        backgroundColor: props.color,
        border: props.selected ? ".4rem dotted white" : "none",
        transform: `translate(${props.left}px, ${props.top}px)`,
      }}
      onClick={(e) => selectBox(props.id, e)}
    >
      {props.children}
    </div>
  );
};

export default observer(BoxDraggable);
