import { types } from "mobx-state-tree";

const BoxModel = types
  .model("Box", {
    id: types.identifier,
    width: 100,
    height: 100,
    color: "var(--genially-color-hover)",
    left: 0,
    top: 0,
    selected: false,
  })
  .actions((self) => ({
    setSelected(selected) {
      self.selected = selected;
    },
    setColor(color) {
      self.color = color;
    },
    transform(left, top) {
      self.left = left;
      self.top = top;
    },
  }));

export default BoxModel;
