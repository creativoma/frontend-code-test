import React from "react";
import { observer } from "mobx-react";
import BoxDraggable from "./BoxDraggable";

function Box(props) {
  return (
    <BoxDraggable {...props}>
      <p>Box</p>
    </BoxDraggable>
  );
}

export default observer(Box);
