export default function Server(time) {
  var status = "ready";
  var time = time;

  this.getStatus = function () {
    return status;
  };

  this.getTime = function () {
    return time;
  };

  this.setStatusToggle = function () {
    status = status === "ready" ? "serving" : "ready";
  };
}

Server.prototype.isAvailable = function () {
  return this.getStatus() === "ready";
};

Server.prototype.servingAsync = function (menu) {
  var server = this;
  server.setStatusToggle();

  return new Promise(function (resolve) {
    setTimeout(function () {
      server.setStatusToggle();
      resolve();
    }, server.getTime());
  });
};
