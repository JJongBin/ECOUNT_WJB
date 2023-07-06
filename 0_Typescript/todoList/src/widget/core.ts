import { Control } from "./type/controlTypes";

export default class Core {
  private _controls: { [key: string]: Control };
  private _instance: Core;

  constructor() {
    if (this._instance) return this._instance;

    this._controls = {};
    this._instance = this;
  }

  addControl(control: Control): void {
    this._controls[control.id] = control;
  }

  getControl(id: string): Control {
    return this._controls[id];
  }

  removeControl(id: string): void {
    delete this._controls[id];
  }
}
