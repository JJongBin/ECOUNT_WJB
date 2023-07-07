import { baseControl } from "./baseWidget";

class Core {
  private _controls: { [key: string]: baseControl };
  private static _instance: Core;

  constructor() {
    if (Core._instance) return Core._instance;

    this._controls = {};
    Core._instance = this;
  }

  addControl(control: baseControl): void {
    Core._instance._controls[control.getId()] = control;
  }

  getControl(id: string): baseControl {
    return Core._instance._controls[id];
  }

  removeControl(id: string): void {
    delete Core._instance._controls[id];
  }
}

const WidgetCore = new Core();
export default WidgetCore;
