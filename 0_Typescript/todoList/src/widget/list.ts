import { Item, Column } from "./type/types";
import { BaseOption, baseControl } from "./baseWidget";
import { LiControl } from "./li";

export interface ListOption extends BaseOption {
  textContent?: string;
  datas: Item[];
  columns: Column[];
}

export class ListControl extends baseControl {
  private _datas: Item[];
  private _columns: Column[];

  constructor({ id, textContent, datas, columns }: ListOption) {
    const elem = document.createElement("ul");
    elem.style.listStyle = "none";
    elem.style.padding = "0";

    super(id, elem);
    elem.textContent = textContent || "";
    this._datas = datas;
    this._columns = columns;
  }

  reload(datas: Item[]) {
    super.getElem().innerHTML = "";
    this.render(datas, this._columns);
  }

  render(datas: Item[], columns: Column[]) {
    this._datas = datas;
    this._columns = columns;

    super.getElem().innerHTML = "";
    super.getChild().forEach((child) => child.dispose());

    datas.forEach((data) => {
      const li = new LiControl({ id: data.id });

      columns.forEach((column) => {
        const control = column.render(data);
        li.append(control);
      });

      this.append(li);
    });
  }
}
