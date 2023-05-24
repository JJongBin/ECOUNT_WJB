import { addControl, removeControl } from "./core";

export function createList(option) {
  var elem = document.createElement("ul");
  elem.style.listStyle = "none";
  elem.style.padding = "0";
  elem.id = option.id;
  var childs = [];

  render(option.datas, option.columns);

  var control = {
    id: option.id,
    elem: elem,
    reload: function (datas) {
      elem.innerHTML = "";
      render(datas, option.columns);
    },
    dispose: function () {
      control.elem.remove();
      removeControl(control.id);

      childs.forEach(function (child) {
        child.dispose();
      });
    },
  };

  addControl(control);
  return control;

  function render(datas, columns) {
    elem.innerHTML = "";
    childs.forEach(function (child) {
      child.dispose();
    });
    childs = [];

    datas.forEach(function (data) {
      var liElem = document.createElement("li");

      columns.forEach(function (column) {
        var control = column.render(data);
        liElem.append(control);
      });

      elem.append(liElem);
    });
  }
}
