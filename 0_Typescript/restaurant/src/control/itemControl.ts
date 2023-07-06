import Menu from "../class/menu";

export default class ItemControl {
  private _items: Menu[];
  private _id: string;

  constructor(id: string) {
    this._items = [];
    this._id = id;
  }

  add(item: Menu): void {
    this._items.push(item);
    this.render();
  }

  remove(item: Menu): void {
    this._items.splice(this._items.indexOf(item), 1);
    this.render();
  }

  getAll(): Menu[] {
    return this._items.slice();
  }

  render() {
    const itemsElem = document.querySelector(this._id) as HTMLElement;

    itemsElem.innerHTML = "";
    this.getAll().forEach(function (item) {
      const liElem = document.createElement("li");
      liElem.textContent = item.getName();
      itemsElem.append(liElem);
    });
  }
}
