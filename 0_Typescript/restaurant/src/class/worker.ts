export default class Worker {
  private _type: string;
  private _status: string;

  constructor(type: string) {
    this._type = type;
    this._status = "ready";
  }

  getType(): string {
    return this._type;
  }

  setStatusToggle(): void {
    this._status = this._status === "ready" ? "working" : "ready";
  }

  isAvailable(): boolean {
    return this._status === "ready";
  }

  workAsync(time: number): Promise<void> {
    const worker = this;
    worker.setStatusToggle();

    return new Promise((resolve) => {
      setTimeout(() => {
        worker.setStatusToggle();
        resolve();
      }, time);
    });
  }
}
