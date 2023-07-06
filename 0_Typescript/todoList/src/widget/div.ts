import { widget } from "./baseWidget";
import { Control, DivControl } from "./type/controlTypes";
import { divOption } from "./type/optionTypes";

export function _createDiv(option: divOption): DivControl {
  const elem = document.createElement("div");
  option.parent.append(elem);

  return {
    id: option.id,
    elem: elem,
    append: (control: Control) => elem.append(control.elem),
  };
}

export const createDiv = widget(_createDiv);
