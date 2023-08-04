import { v4 as uuidv4 } from "uuid";
import getRandomColor from "../utils/getRandomColor.js";
import BoxModel from "../stores/models/Box.js";
import store from "../stores/MainStore.js";

const setMessage = (id) => {
  let msjSelected = document.querySelector("#msjSelected");
  if (id === "none") {
    msjSelected.innerHTML = "<u>Selected:</u>&nbsp;none";
  } else {
    msjSelected.innerHTML = "<u>Selected:</u>&nbsp;" + id;
  }
};

export const addBox = () => {
  const box = BoxModel.create({
    id: uuidv4(),
    color: getRandomColor(),
    left: 0,
    top: 0,
  });

  store.addBox(box);
};

export const removeAllBox = () => {
  store.removeAllBox();
  setMessage("none");
};

export const removeSelectedBox = () => {
  store.removeSelectedBox();
  setMessage("none");
};

export const selectBox = (id) => {
  store.selectBox(id);
  setMessage(id);
};
