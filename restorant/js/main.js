import ItemControl from "./control/itemControl.js";
import WorkerControl from "./control/workerControl.js";
import Chef from "./class/chef.js";
import Server from "./class/server.js";
import Menu from "./class/menu.js";

var orderControl = new ItemControl("#orders");
var cookingControl = new ItemControl("#cookings");
var servingControl = new ItemControl("#servings");
var chefControl = new WorkerControl([new Chef(), new Chef()]);
var serverControl = new WorkerControl([new Server(1000), new Server(3000)]);

document.querySelector("#sundea").onclick = function () {
  run(new Menu("순댓국", 5000));
};

document.querySelector("#heajang").onclick = function () {
  run(new Menu("해장국", 3000));
};

function run(menu) {
  orderControl.add(menu);

  chefControl
    .findWorkerAsync()
    .then(function (chef) {
      orderControl.remove(menu);
      cookingControl.add(menu);
      return chef.cookAsync(menu);
    })
    .then(function () {
      return serverControl.findWorkerAsync();
    })
    .then(function (server) {
      cookingControl.remove(menu);
      servingControl.add(menu);
      return server.servingAsync(menu);
    })
    .then(function () {
      servingControl.remove(menu);
    });
}
