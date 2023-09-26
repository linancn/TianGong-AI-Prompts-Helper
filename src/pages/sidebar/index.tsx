import React from "react";
import { createRoot } from "react-dom/client";
import "@pages/sidebar/index.css";
import Popup from "@pages/sidebar/Sidebar";
import refreshOnUpdate from "virtual:reload-on-update-in-view";

refreshOnUpdate("pages/sidebar");

function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find #app-container");
  }
  const root = createRoot(appContainer);
  root.render(<Popup />);
}

init();
