import Core from "./core";
import { Control } from "./type/controlTypes";

const core = new Core();

export function widget(creator: Function): Function {
  return function (): Control {
    const control = creator.apply(null, arguments);

    control.dispose = function () {
      control.elem.remove();
      core.removeControl(control.id);

      control.elem.children.forEach((child: Control) => child.dispose());
    };

    core.addControl(control);

    return control;
  };
}
