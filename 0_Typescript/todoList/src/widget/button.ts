import { BaseOption, baseControl } from "./baseWidget";

interface ButtonOption extends BaseOption {
  textContent: string;
  onClick: (e: MouseEvent) => void;
}
export class ButtonControl extends baseControl {
  constructor({ id, textContent, onClick }: ButtonOption) {
    const elem = document.createElement("button");

    super(id, elem);
    elem.textContent = textContent;
    elem.onclick = onClick;
  }
}
