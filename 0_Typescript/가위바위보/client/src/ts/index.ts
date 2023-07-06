import { Item } from "./item";
import { CricleData } from "./cricleData";

const items = new CricleData([new Item("가위", game), new Item("바위", game), new Item("보", game)]);

const startBtnElem = document.querySelector("#startBtn") as HTMLButtonElement;
const comElem = document.querySelector("#com") as HTMLDivElement;
const itemBtnElem = document.querySelector("#itemBtns") as HTMLDivElement;

let comCurrItem = items.getAllItems()[0];
let intervalId: NodeJS.Timer;

items.getAllItems().forEach((item: Item) => {
  item.disable(true);
});

items.getAllItems().forEach((item: Item) => {
  item.render(itemBtnElem);
});

function game(item: Item): void {
  const next = items.getNext(item);

  if (item === comCurrItem) alert("비겼습니다.");
  else if (next === comCurrItem) alert("졌습니다.");
  else alert("이겼습니다.");

  clearInterval(intervalId);
  toggleBtn(false);
}

function toggleBtn(value: boolean): void {
  if (value) startBtnElem.setAttribute("disabled", "true");
  else startBtnElem.removeAttribute("disabled");

  items.getAllItems().forEach(function (item) {
    item.disable(!value);
  });
}

startBtnElem.addEventListener("click", () => {
  toggleBtn(true);

  intervalId = setInterval(() => {
    comCurrItem = items.getNext(comCurrItem);
    comElem.textContent = comCurrItem.getName();
  }, 100);
});
