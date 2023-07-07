import { BaseOption, baseControl } from "./baseWidget";

export interface SpanOption extends BaseOption {
  textContent: string;
}

export class SpanControl extends baseControl {
  constructor({ id, textContent }: SpanOption) {
    const elem = document.createElement("span");

    super(id, elem);
    elem.textContent = textContent || "";
  }
}
