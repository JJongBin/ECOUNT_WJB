import { Control } from "./type/controlTypes";

class Core {
  private _controls: { [key: string]: Control };
  private static _instance: Core;

  constructor() {
    if (Core._instance) return Core._instance;

    this._controls = {};
    Core._instance = this;
  }

  addControl(control: Control): void {
    Core._instance._controls[control.id] = control;
  }

  getControl(id: string): Control {
    return Core._instance._controls[id];
  }

  removeControl(id: string): void {
    delete Core._instance._controls[id];
  }
}

const WidgetCore = new Core();
export default WidgetCore;
