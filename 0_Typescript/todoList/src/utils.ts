import Widget from "./widget";
import { ListControl } from "./widget/list";
import { InputControl } from "./widget/input";
import { Item } from "./widget/type/types";

const todoList: Item[] = [];

function render() {
  (Widget.getControl("todoList") as ListControl).reload(getData({ done: false }));
  (Widget.getControl("doneList") as ListControl).reload(getData({ done: true }));
}

export function getData(option: { done: boolean }) {
  return todoList.filter((item: Item) => item.done === option.done);
}

export function insertTodo() {
  const inputControl = Widget.getControl("todoInput") as InputControl;
  const value = inputControl.getValue();
  if (!value) {
    alert("값을 입력해주세요.");
    return;
  }

  todoList.push({
    id: crypto.randomUUID(),
    content: value,
    done: false,
  });

  inputControl.resetValue();
  inputControl.focus();
  render();
}

export function renderCheckBox(data: Item) {
  const inputControl = new Widget.input({
    id: "checkbox",
    type: "checkBox",
    checked: data.done,
    onChange: (e: Event) => {
      if (!(e.target instanceof HTMLInputElement)) return;

      data.done = e.target.checked;
      render();
    },
  });

  return inputControl;
}

export function renderContent(data: Item) {
  const spanContrl = new Widget.span({ id: data.id, textContent: data.content });

  return spanContrl;
}

export function renderDeleteBtn(data: Item) {
  const delBtnContrl = new Widget.button({
    id: data.id,
    textContent: "삭제",
    onClick: () => {
      todoList.splice(todoList.indexOf(data), 1);
      render();
    },
  });

  return delBtnContrl;
}
