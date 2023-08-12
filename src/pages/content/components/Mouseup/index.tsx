import React from "react";
import ReactDOM from "react-dom";
import { CSSProperties } from "react";

// 悬浮图标组件
const FloatingIcon: React.FC<{ x: number; y: number }> = ({ x, y }) => {
  const style: CSSProperties = {
    position: "absolute",
    top: `${y}px`,
    left: `${x}px`,
    cursor: "pointer",
    width: "24px",
    height: "24px",
  };
  const imageURL = chrome.runtime.getURL("icon-128.png");
  return <img src={imageURL} style={style} alt="Icon" />;
};

document.body.addEventListener("mouseup", function (e) {
  const selectedText = window.getSelection().toString().trim();
  const existingIcon = document.getElementById("floating-tiangong-div");

  // 如果已存在图标，先删除它
  if (existingIcon) {
    existingIcon.remove();
  }

  if (selectedText.length > 1) {
    const iconDiv = document.createElement("div");
    iconDiv.id = "floating-tiangong-div";
    document.body.appendChild(iconDiv);
    ReactDOM.render(<FloatingIcon x={e.clientX} y={e.clientY} />, iconDiv);
  }
});
