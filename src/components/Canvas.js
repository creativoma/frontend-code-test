import React from "react";
import { observer } from "mobx-react";
import Box from "../components/Box.js";

function Canvas({ store }) {
  return (
    <div className="canva">
      {store.boxes.map((box, index) => {
        const topSize = index >= 10 ? Math.floor(index / 10) * 100 : 0;
        const leftSize = (index % 10) * 100;

        return (
          <Box
            id={box.id}
            key={index}
            color={box.color}
            left={leftSize}
            top={box.top + topSize}
            width={box.width}
            height={box.height}
            box={box}
            selected={box.selected}
          />
        );
      })}
    </div>
  );
}

export default observer(Canvas);
