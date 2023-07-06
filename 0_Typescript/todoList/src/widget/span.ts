import { widget } from "./baseWidget";
import { SpanControl } from "./type/controlTypes";
import { SpanOption } from "./type/optionTypes";

export function _createSpan(option: SpanOption): SpanControl {
  const elem = document.createElement("span");
  elem.textContent = option.content;

  return {
    id: option.id,
    elem: elem,
  };
}

export const createSpan = widget(_createSpan);
