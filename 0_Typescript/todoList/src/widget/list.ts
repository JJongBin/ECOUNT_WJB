import { widget } from "./baseWidget";
import { Control, ListControl } from "./type/controlTypes";
import { ListOption } from "./type/optionTypes";
import { Item } from "./type/types";

export function _createList(option: ListOption): ListControl {
  const elem = document.createElement("ul");
  elem.style.listStyle = "none";
  elem.style.padding = "0";
  elem.id = option.id;

  const childs: Control[] = [];

  render(option.datas, option.columns);

  return {
    id: option.id,
    elem: elem,
    reload: (datas: Item[]) => {
      elem.innerHTML = "";
      render(datas, option.columns);
    },
  };

  function render(datas: ListOption["datas"], columns: ListOption["columns"]) {
    elem.innerHTML = "";
    childs.forEach((child: Control) => {
      if (child.dispose) child.dispose();
    });
    childs.length = 0;

    datas.forEach((data) => {
      const liElem = document.createElement("li");

      columns.forEach((column) => {
        const control = column.render(data);
        liElem.append(control);
      });

      elem.append(liElem);
    });
  }
}

export const createList = widget(_createList);
