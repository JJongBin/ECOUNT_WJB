import { Item } from "./item";

export class CricleData {
  private _items: Item[];

  constructor(items: Item[]) {
    this._items = items || new Array();
  }

  insertItem(item: Item): void {
    this._items.push(item);
  }

  getAllItems(): Item[] {
    return this._items;
  }

  getNext(item: Item): Item {
    const items = this.getAllItems();
    const index = items.indexOf(item);
    const next = items[index + 1];

    return next ? next : items[0];
  }
}
