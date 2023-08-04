import { v4 as uuidv4 } from "uuid";
import getRandomColor from "../utils/getRandomColor.js";
import BoxModel from "../stores/models/Box.js";
import store from "../stores/MainStore.js";

const setMessages = (id) => {
  let msjSelected = document.querySelector("#idBoxSelected");
  if (id === "none") {
    const span = msjSelected.querySelector("span");
    span.innerHTML = "none";
  } else {
    const span = msjSelected.querySelector("span");
    span.innerHTML = `${id}`;
  }

  let msjQuantity = document.querySelector("#quantityBoxSelected");
  const span = msjQuantity.querySelector("span");
  span.innerHTML = `${store.boxes.filter((box) => box.selected).length}`;
};

const setColorInput = (color) => {
  let inputColor = document.querySelector("input[type=color]");
  inputColor.value = color;
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

export const changeColor = (e) => {
  store.changeColor(e.target.value);
};

export const updateBox = (id, left, top) => {
  store.updateBox(id, left, top);
};

export const removeAllBox = () => {
  store.removeAllBox();
  setMessages("none");
};

export const removeSelectedBox = () => {
  store.removeSelectedBox();
  setMessages("none");
};

export const selectBox = (id) => {
  store.selectBox(id);
  setMessages(id);
  setColorInput(store.boxes.find((box) => box.id === id).color);
};
