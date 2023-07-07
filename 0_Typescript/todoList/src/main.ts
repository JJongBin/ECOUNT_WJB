import Widget from "./widget/index";
import { getData, insertTodo, renderCheckBox, renderContent, renderDeleteBtn } from "./utils";

const root = document.querySelector("#root");
const containerControl = Widget.div({ id: "container", parent: root });

const inputControl = Widget.input({ id: "todoInput" });
const todoBtnControl = Widget.button({
  id: "insertTodoBtn",
  label: "입력",
  onClick: insertTodo,
});

const todoListTitleControl = Widget.h2({ content: "할일" });
const todoListControl = Widget.list({
  id: "todoList",
  datas: getData({ done: false }),
  columns: [
    { id: "done", render: renderCheckBox },
    { id: "todo", render: renderContent },
    { id: "delete", render: renderDeleteBtn },
  ],
});

const doneListTitleControl = Widget.h2({ content: "완료" });
const doneListControl = Widget.list({
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
