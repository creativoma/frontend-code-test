import { v4 as uuidv4 } from "uuid";
import getRandomColor from "../utils/getRandomColor.js";
import BoxModel from "../stores/models/Box.js";
import store from "../stores/MainStore.js";

const setMessages = () => {
  let msjSelected = document.querySelector("#idBoxSelected");
  const selectedBoxes = store.boxes.filter((box) => box.selected);
  if (selectedBoxes.length === 0) {
    msjSelected.innerHTML = "-";
  } else {
    const selectedIds = selectedBoxes
      .map((box) => box.id.substring(0, 8))
      .join(" - ");
    msjSelected.innerHTML = selectedIds;
  }

  let msjQuantity = document.querySelector("#quantityBoxSelected");
  msjQuantity.innerHTML = `${selectedBoxes.length}`;
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

export const removeSelectedBox = (id, e) => {
  let handleMouseEvents = () => {
    setMessages("none");
  };

  if (store.selectedBoxesCounter > 1) {
    store.removeMultipleSelectedBox();
    handleMouseEvents();
  } else {
    store.removeSelectedBox();
    handleMouseEvents();
  }
};

export const selectBox = (id, e) => {
  let handleMouseEvents = (id) => {
    setMessages(id);
    setColorInput(store.boxes.find((box) => box.id === id).color);
  };

  if (e.ctrlKey) {
    store.selectMultipleBoxes(id);
    handleMouseEvents(id);
  } else {
    store.selectOneBox(id);
    handleMouseEvents(id);
  }
};

export const undo = () => {
  if (store.undoHistory.canUndo) {
    store.undoHistory.undo();
    setMessages();
  }
};

export const redo = () => {
  if (store.undoHistory.canRedo) {
    store.undoHistory.redo();
    setMessages();
  }
};

export const storageClear = () => {
  removeAllBox();
  localStorage.clear();
  store.undoHistory.clear();
};