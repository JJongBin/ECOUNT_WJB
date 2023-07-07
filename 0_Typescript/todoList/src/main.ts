import Widget from "./widget/index";
import { getData, insertTodo, renderCheckBox, renderContent, renderDeleteBtn } from "./utils";

const root = document.querySelector("#root");
const containerControl = new Widget.div({ id: "container" });
root.append(containerControl.getElem());

const inputControl = new Widget.input({ id: "todoInput" });
const todoBtnControl = new Widget.button({
  id: "insertTodoBtn",
  textContent: "입력",
  onClick: insertTodo,
});

const todoListTitleControl = new Widget.h2({ id: "todoHead", textContent: "할일" });
const todoListControl = new Widget.list({
  id: "todoList",
  datas: getData({ done: false }),
  columns: [
    { id: "done", render: renderCheckBox },
    { id: "todo", render: renderContent },
    { id: "delete", render: renderDeleteBtn },
  ],
});

const doneListTitleControl = new Widget.h2({ id: "doneHead", textContent: "완료" });
const doneListControl = new Widget.list({
  id: "doneList",
  datas: getData({ done: true }),
  columns: [
    { id: "done", render: renderCheckBox },
    { id: "todo", render: renderContent },
    { id: "delete", render: renderDeleteBtn },
  ],
});

containerControl.append(inputControl);
containerControl.append(todoBtnControl);
containerControl.append(todoListTitleControl);
containerControl.append(todoListControl);
containerControl.append(doneListTitleControl);
containerControl.append(doneListControl);
