import Core from "./core";
import { Control } from "./type/controlTypes";

export function widget(creator: Function): Function {
  return function (): Control {
    const control = creator.apply(null, arguments);

    control.dispose = function () {
      control.elem.remove();
      Core.removeControl(control.id);

      control.elem.children.forEach((child: Control) => child.dispose());
    };

    Core.addControl(control);

    return control;
  };
}
