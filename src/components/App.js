import React from "react";
import store from "../stores/MainStore";
import Canvas from "./Canvas";
import Toolbar from "./Toolbar";
import { observer } from "mobx-react";

function App() {
  return (
    <div className="app">
      <Toolbar />
      <Canvas store={store} />
      <small>Use ctrl + click to select multiple boxes.</small>
    </div>
  );
}

export default observer(App);
