import React from "react";
import { observer } from "mobx-react";
import Box from "../components/Box.js";

const measures = {
  wCanva: 1000,
  hCanva: 562.5,
};

const Canvas = ({ store }) => {
  return (
    <div className="canva">
      {store.boxes.map((box, index) => {
        const leftSize = measures.wCanva / 2 - box.width / 2;
        const topSize = measures.hCanva / 2 - box.height / 2;
        return (
          <Box
            id={box.id}
            key={index}
            color={box.color}
            left={leftSize}
            top={topSize}
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
