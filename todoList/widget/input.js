import { addControl } from "./core";

export function createInput(option) {
  var elem = document.createElement("input");
  elem.type = option.type || "textg";

  if (option.checked) elem.checked = option.checked;
  if (option.onChange)
    elem.addEventListener("change", function (e) {
      option.onChange(e);
    });

  var control = {
    id: option.id,
    elem: elem,
    getValue: function () {
      return elem.value;
    },
    valueReset: function () {
      elem.value = "";
    },
    focus: function () {
      elem.focus();
    },
  };

  addControl(control);
  return control;
}
