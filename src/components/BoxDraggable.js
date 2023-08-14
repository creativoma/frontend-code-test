import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react";
import { selectBox } from "../events/Events.js";
import { boxDragging } from "./Interact.js";

const BoxDraggable = (props) => {
  const ref = useRef(null);

  useEffect(() => {
    boxDragging(ref, props.id, props.left, props.top);
  }, [props]);

  return (
    <div
      data-testid="boxDraggable"
      id={props.id}
      ref={ref}
      className="box"
      style={{
        width: props.width,
        height: props.height,
        boxSizing: "border-box",
        backgroundColor: props.color,
        outlineOffset: "0.5rem",
        outline: props.selected
          ? ".2rem dashed var(--genially-background-color)"
          : "none",
        transform: `translate(${props.left}px, ${props.top}px)`,
      }}
      onDoubleClick={(e) => selectBox(props.id, e)}
    >
      {props.children}
    </div>
  );
};

export default observer(BoxDraggable);
