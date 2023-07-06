export default class Menu {
  private _name: string;
  private _time: number;

  constructor(name: string, time: number) {
    this._name = name;
    this._time = time;
  }

  getName(): string {
    return this._name;
  }

  getTime(): number {
    return this._time;
  }
}
