import { addControl, removeControl } from "./core";

// 데코레이터 패턴
export function widget(creator) {
  return function () {
    var control = creator.apply(null, arguments);

    control.dispose = function () {
      control.elem.remove();
      removeControl(control.id);
    };

    addControl(control);
    return control;
  };
}
