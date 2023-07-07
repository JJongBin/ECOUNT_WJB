import { BaseOption, baseControl } from "./baseWidget";

export interface LiOption extends BaseOption {
  textContent?: string;
}

export class LiControl extends baseControl {
  constructor({ id, textContent }: LiOption) {
    const elem = document.createElement("li");

    super(id, elem);
    elem.textContent = textContent || "";
  }
}
