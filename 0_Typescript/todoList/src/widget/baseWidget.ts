import Core from "./core";

export interface BaseOption {
  id: string;
}

export class baseControl {
  private _id: string;
  private _elem: HTMLElement;
  private _child: baseControl[];

  constructor(id: string, elem: HTMLElement) {
    this._id = id;
    this._elem = elem;
    this._child = [];

    Core.addControl(this);
  }

  getId(): string {
    return this._id;
  }

  getElem(): HTMLElement {
    return this._elem;
  }

  getChild(): baseControl[] {
    return this._child;
  }

  append(control: baseControl): void {
    this._elem.append(control.getElem());
    this._child.push(control);
  }

  dispose(): void {
    this._elem.remove();
    Core.removeControl(this._id);

    this._child.forEach((child) => child.dispose());
  }
}
