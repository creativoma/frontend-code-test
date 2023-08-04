import { v4 as uuidv4 } from "uuid";
import { types } from "mobx-state-tree";
import BoxModel from "./models/Box.js";

const MainStore = types
  .model("MainStore", {
    boxes: types.array(BoxModel),
    selectedBoxesCounter: 0,
  })
  .actions((self) => ({
    addBox(box) {
      self.boxes.push(box);
    },
    selectOneBox(id) {
      self.boxes.forEach((Box) => Box.setSelected(false));
      const boxSelected = self.boxes.find((box) => box.id === id);
      if (boxSelected) {
        boxSelected.setSelected(true);
      }
      self.selectedBoxesCounter = 1;
    },
    selectMultipleBoxes(id) {
      const boxSelected = self.boxes.find((box) => box.id === id);
      if (boxSelected) {
        boxSelected.setSelected(!boxSelected.selected);
      }
      self.selectedBoxesCounter = self.boxes.filter(
        (box) => box.selected
      ).length;
    },
    removeAllBox() {
      self.boxes = [];
    },
    removeSelectedBox() {
      const boxSelected = self.boxes.find((box) => box.selected === true);
      if (boxSelected) {
        self.boxes.remove(boxSelected);
      }
    },
    removeMultipleSelectedBox() {
      const boxesToRemove = self.boxes.filter((box) => box.selected);
      const numBoxesToRemove = boxesToRemove.length;

      if (numBoxesToRemove > 0) {
        self.boxes.splice(
          self.boxes.indexOf(boxesToRemove[0]),
          numBoxesToRemove
        );
      }
      self.selectedBoxesCounter = 0;
    },
    changeColor(color) {
      const selectedBoxes = self.boxes.filter((box) => box.selected);
      if (selectedBoxes.length === 0) {
        const boxSelected = self.boxes.find((box) => box.selected === true);
        if (boxSelected) {
          boxSelected.setColor(color);
        }
      } else {
        selectedBoxes.forEach((box) => box.setColor(color));
      }     
    },
    updateBox(id, left, top) {
      const boxSelected = self.boxes.find((box) => box.id === id);
      if (boxSelected) {
        boxSelected.transform(left, top);
      }
    },
  }));

const store = MainStore.create();

// Printing initial box
const box1 = BoxModel.create({
  id: uuidv4(),
  color: "#f788e4",
  left: 0,
  top: 0,
});

store.addBox(box1);

export default store;
