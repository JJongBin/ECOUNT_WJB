import Worker from "./worker";

export default class Server extends Worker {
  private _time: number;

  constructor(time: number) {
    super("server");
    this._time = time;
  }

  getTime(): number {
    return this._time;
  }
}
