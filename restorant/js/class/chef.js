export default function Chef() {
  var status = "ready";

  this.getStatus = function () {
    return status;
  };

  this.setStatusToggle = function () {
    status = status === "ready" ? "cooking" : "ready";
  };
}

Chef.prototype.isAvailable = function () {
  return this.getStatus() === "ready";
};

Chef.prototype.cookAsync = function (menu) {
  var chef = this;
  chef.setStatusToggle();

  return new Promise(function (resolve) {
    setTimeout(function () {
      chef.setStatusToggle();
      resolve();
    }, menu.getTime());
  });
};
