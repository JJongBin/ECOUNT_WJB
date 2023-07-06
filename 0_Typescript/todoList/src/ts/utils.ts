import Widget from "../widget";
import { ListControl, InputControl } from "../widget/type/controlTypes";
import { Item } from "./type/types";

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

  inputControl.valueReset();
  inputControl.focus();
  render();
}

export function renderCheckBox(data: Item) {
  const inputControl = Widget.input({
    type: "checkBox",
    checked: data.done,
    onChange: (e: any) => {
      data.done = e.target.checked;
      render();
    },
  });

  return inputControl.elem;
}

export function renderContent(data: Item) {
  const spanContrl = Widget.span({ content: data.content });

  return spanContrl.elem;
}

export function renderDeleteBtn(data: Item) {
  const delBtnContrl = Widget.button({
    label: "삭제",
    onClick: function () {
      todoList.splice(todoList.indexOf(data), 1);
      render();
    },
  });

  return delBtnContrl.elem;
}
