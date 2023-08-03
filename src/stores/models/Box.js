import { types } from "mobx-state-tree";

const BoxModel = types
  .model("Box", {
    id: types.identifier,
    width: 150,
    height: 150,
    color: "#221ab2",
    left: 0,
    top: 0
  })
  .views(self => ({}))
  .actions(self => ({}));

export default BoxModel;
