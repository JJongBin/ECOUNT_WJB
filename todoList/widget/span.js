import { addControl } from "./core";

export function createSpan(option) {
  var elem = document.createElement("span");
  elem.textContent = option.content;

  var control = {
    id: option.id,
    elem: elem,
  };

  addControl(control);
  return control;
}
