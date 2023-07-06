import { widget } from "./baseWidget";
import { ButtonControl } from "./type/controlTypes";
import { ButtonOption } from "./type/optionTypes";

export function _createButton(option: ButtonOption): ButtonControl {
  const elem = document.createElement("button");
  elem.id = option.id;
  elem.textContent = option.label;
  elem.onclick = option.onClick;

  return {
    id: option.id,
    elem: elem,
  };
}

export const createButton = widget(_createButton);
