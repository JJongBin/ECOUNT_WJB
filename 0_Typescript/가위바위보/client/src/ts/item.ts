export class Item {
  private _name: string;
  private _btnElem: HTMLButtonElement;

  constructor(name: string, onClick: Function) {
    this._name = name;
    this._btnElem = document.createElement("button");

    this._btnElem.textContent = name;
    this._btnElem.addEventListener("click", () => {
      onClick(this);
    });
  }
  getName(): string {
    return this._name;
  }

  getItemElem(): HTMLButtonElement {
    return this._btnElem;
  }

  render(parentElem: HTMLElement): void {
    parentElem.append(this.getItemElem());
  }

  disable(value: boolean): void {
    const item = this.getItemElem();

    if (value) item.setAttribute("disabled", value.toString());
    else item.removeAttribute("disabled");
  }
}
