import { Item } from "./item.js";
import { CricleData } from "./cricleData.js";

(function () {
  var items = new CricleData([
    new Item("가위", game),
    new Item("바위", game),
    new Item("보", game),
  ]);

  var startBtnElem = document.querySelector("#startBtn");
  var comElem = document.querySelector("#com");
  var itemBtnElem = document.querySelector("#itemBtns");

  var comCurrItem = items.getAllItems()[0];
  var intervalId;

  items.getAllItems().forEach(function (item) {
    item.disable(true);
  });

  items.getAllItems().forEach(function (item) {
    item.render(itemBtnElem);
  });

  function toggleBtn(value) {
    if (value) startBtnElem.setAttribute("disabled", true);
    else startBtnElem.removeAttribute("disabled");

    items.getAllItems().forEach(function (item) {
      item.disable(!value);
    });
  }

  function game(item) {
    var next = items.getNext(item);

    if (item === comCurrItem) alert("비겼습니다.");
    else if (next === comCurrItem) alert("졌습니다.");
    else alert("이겼습니다.");

    clearInterval(intervalId);
    toggleBtn(false);
  }

  startBtnElem.addEventListener("click", function () {
    toggleBtn(true);

    intervalId = setInterval(() => {
      comCurrItem = items.getNext(comCurrItem);
      comElem.textContent = comCurrItem.getName();
    }, 100);
  });
})();
