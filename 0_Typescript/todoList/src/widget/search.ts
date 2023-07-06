import { widget } from "./baseWidget";
import { Control, SearchControl } from "./type/controlTypes";
import { SearchOption } from "./type/optionTypes";

export function _createDiv(option: SearchOption): SearchControl {
  const elem = document.createElement("div");
  option.parent.append(elem);

  return {
    id: option.id,
    elem: elem,
    append: (control: Control) => elem.append(control.elem),
  };
}

export const createDiv = widget(_createDiv);
