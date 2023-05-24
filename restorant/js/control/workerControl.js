export default function WorkerControl(value) {
  var items = value || [];

  this.add = function (item) {
    items.push(item);
  };

  this.remove = function (item) {
    items.splice(items.indexOf(item), 1);
  };

  this.getAll = function () {
    return items.slice();
  };
}

WorkerControl.prototype.findWorkerAsync = function () {
  var worker = this;

  return new Promise(function (resolve) {
    var workers = worker.getAll();

    var intervalId = setInterval(() => {
      var availableWorker = workers.filter(function (worker) {
        return worker.isAvailable();
      });

      if (availableWorker.length) {
        clearInterval(intervalId);
        resolve(availableWorker[0]);
      }
    }, 100);
  });
};
