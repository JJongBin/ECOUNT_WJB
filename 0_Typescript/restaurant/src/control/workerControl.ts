import Worker from "../class/worker";

export default class WorkerControl<T extends Worker> {
  private _workers: T[];

  constructor(workers: T[]) {
    this._workers = workers || [];
  }

  add(worker: T): void {
    this._workers.push(worker);
  }

  remove(worker: T): void {
    this._workers.splice(this._workers.indexOf(worker), 1);
  }

  getAll(): T[] {
    return this._workers.slice();
  }

  findWorkerAsync(): Promise<T> {
    const worker = this;

    return new Promise((resolve) => {
      const workers: T[] = worker.getAll();

      const intervalId = setInterval(() => {
        const availableWorker = workers.filter((worker: T) => {
          return worker.isAvailable();
        });

        if (availableWorker.length) {
          clearInterval(intervalId);
          resolve(availableWorker[0]);
        }
      }, 100);
    });
  }
}
