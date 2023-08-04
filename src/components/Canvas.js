import React from "react";
import { observer } from "mobx-react";
import Box from "../components/Box.js";

const Canvas = ({ store }) => {
  return (
    <div className="canva">
      {store.boxes.map((box, index) => {
        return (
          <Box
            id={box.id}
            key={index}
            color={box.color}
            left={box.left}
            top={box.top}
            width={box.width}
            height={box.height}
            box={box}
            selected={box.selected}
          />
        );
      })}
    </div>
  );
};

export default observer(Canvas);
