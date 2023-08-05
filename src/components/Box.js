import React from "react";
import { observer } from "mobx-react";
import BoxDraggable from "./BoxDraggable.js";

const reduceid = (id) => {
  return id.slice(0, 3);
};

function Box(props) {
  return (
    <BoxDraggable {...props}>
      <p>Box {reduceid(props.id)}</p>
    </BoxDraggable>
  );
}

export default observer(Box);
