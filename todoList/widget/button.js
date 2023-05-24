import { widget } from "./baseWidget";

export function _createButton(option) {
  var elem = document.createElement("button");
  elem.textContent = option.label;
  if (option.id) elem.id = option.id;

  elem.addEventListener("click", option.onClick);

  return {
    id: option.id,
    elem: elem,
  };
}

export var createButton = widget(_createButton);
