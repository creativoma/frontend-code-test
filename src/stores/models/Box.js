import { types } from "mobx-state-tree";

const BoxModel = types
  .model("Box", {
    id: types.identifier,
    width: 100,
    height: 100,
    color: "#221ab2",
    left: 0,
    top: 0
  })
  .views(self => ({}))
  .actions(self => ({}));

export default BoxModel;
