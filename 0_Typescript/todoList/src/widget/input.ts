import { BaseOption, baseControl } from "./baseWidget";

export interface InputOption extends BaseOption {
  value?: string;
  type?: string;
  checked?: boolean;
  onChange?: (e: Event) => void;
}

export class InputControl extends baseControl {
  constructor({ id, value, type, checked, onChange }: InputOption) {
    const elem = document.createElement("input");

    super(id, elem);
    elem.value = value || "";
    elem.type = type || "text";

    if (checked) elem.checked = checked;
    if (onChange) elem.onchange = onChange;
  }

  getValue(): string {
    return (super.getElem() as HTMLInputElement).value;
  }

  focus(): void {
    (super.getElem() as HTMLInputElement).focus();
  }

  resetValue(): void {
    (super.getElem() as HTMLInputElement).value = "";
  }
}
