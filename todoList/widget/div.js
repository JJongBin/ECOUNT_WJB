import { addControl } from "./core";

export function createDiv(option) {
  var elem = document.createElement("div");
  option.parent.append(elem);

  var control = {
    id: option.id,
    elem: elem,
    append: function (control) {
      elem.append(control.elem);
    },
  };

  addControl(control);
  return control;
}
