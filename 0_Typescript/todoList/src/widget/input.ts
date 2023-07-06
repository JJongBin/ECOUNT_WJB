import { widget } from "./baseWidget";
import { InputControl } from "./type/controlTypes";
import { InputOption } from "./type/optionTypes";

export function _createInput(option: InputOption): InputControl {
  const elem = document.createElement("input");
  elem.type = option.type || "text";

  if (option.checked) elem.checked = option.checked;
  if (option.onChange)
    elem.addEventListener("change", (e) => {
      if (option.onChange) option.onChange(e);
    });

  return {
    id: option.id,
    elem: elem,
    getValue: () => elem.value,
    focus: () => elem.focus(),
    valueReset: () => {
      elem.value = "";
    },
  };
}

export const createInput = widget(_createInput);
