import { widget } from "./baseWidget";
import { H2Control } from "./type/controlTypes";
import { H2Option } from "./type/optionTypes";

export function _createH2(option: H2Option): H2Control {
  const elem = document.createElement("h2");
  elem.id = option.id;
  elem.textContent = option.content;

  return {
    id: option.id,
    elem: elem,
  };
}
export const createH2 = widget(_createH2);
