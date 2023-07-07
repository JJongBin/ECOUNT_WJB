import { BaseOption, baseControl } from "./baseWidget";

export interface DivOption extends BaseOption {
  textContent?: string;
}

export class DivControl extends baseControl {
  constructor({ id, textContent }: DivOption) {
    const elem = document.createElement("div");

    super(id, elem);
    elem.textContent = textContent || "";
  }
}
