import { v4 as uuidv4 } from "uuid";
import { types } from "mobx-state-tree";
import BoxModel from "./models/Box.js";

const MainStore = types
  .model("MainStore", {
    boxes: types.array(BoxModel),
  })
  .actions((self) => ({
    addBox(box) {
      self.boxes.push(box);
    },
    selectBox(id) {
      self.boxes.forEach((Box) => Box.setSelected(false));
      const boxSelected = self.boxes.find((box) => box.id === id);
      if (boxSelected) {
        boxSelected.setSelected(true);
      }
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
    changeColor(color) {
      const boxSelected = self.boxes.find((box) => box.selected === true);
      if (boxSelected) {
        boxSelected.setColor(color);
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
