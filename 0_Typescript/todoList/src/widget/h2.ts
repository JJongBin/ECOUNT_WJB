import { BaseOption, baseControl } from "./baseWidget";

export interface H2Option extends BaseOption {
  textContent: string;
}

export class H2Control extends baseControl {
  constructor({ id, textContent }: H2Option) {
    const elem = document.createElement("h2");

    super(id, elem);
    elem.textContent = textContent || "";
  }
}
