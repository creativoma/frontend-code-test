import interact from "interactjs";
import { moveBox, moveSelectedBox } from "../events/Events.js";
import store from "../stores/MainStore.js";

export const boxDragging = (ref) => {
  const boxCurrent = ref.current;

  const boxMovement = interact(boxCurrent).draggable({
    inertia: false,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: "parent",
        endOnly: false,
      }),
    ],
    autoScroll: false,
    listeners: {
      move(e) {
        if (store.selectedBoxesCounter > 1) {
          moveSelectedBox(e.dx, e.dy);
        } else {
          moveBox(boxCurrent.id, e.dx, e.dy);
        }
      },
    },
  });

  return () => boxMovement.unset();
};
