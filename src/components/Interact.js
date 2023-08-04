import interact from "interactjs";
import { updateBox } from "../events/boxEvents.js";

export const boxDragging = (ref, id, left, top) => {
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
        left = (parseInt(boxCurrent.getAttribute("data-x")) || left) + e.dx;
        top = (parseInt(boxCurrent.getAttribute("data-y")) || top) + e.dy;
        boxCurrent.setAttribute("data-x", left);
        boxCurrent.setAttribute("data-y", top);
        boxCurrent.style.transform = `translate(${left}px, ${top}px)`;
      },
      end() {
        updateBox(id, left, top);
      },
    },
  });

  return boxMovement;
};
