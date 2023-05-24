var root = document.querySelector("#root");
var containerControl = Widget.div({ id: "container", parent: root });

var inputControl = Widget.input({ id: "todoInput" });
var todoBtnControl = Widget.button({
  id: "insertTodoBtn",
  label: "입력",
  onClick: insertTodo,
});

var todoListTitleControl = Widget.h2({ content: "할일" });
var todoListControl = Widget.list({
  id: "todoList",
  datas: getData({ done: false }),
  columns: [
    { id: "done", render: renderCheckBox },
    { id: "todo", render: renderContent },
    { id: "delete", render: renderDeleteBtn },
  ],
});

var doneListTitleControl = Widget.h2({ content: "완료" });
var doneListControl = Widget.list({
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

// containerControl.elem.append(inputControl.elem);
// containerControl.elem.append(todoBtnControl.elem);
// containerControl.elem.append(todoListTitleControl.elem);
// containerControl.elem.append(todoListControl.elem);
// containerControl.elem.append(doneListTitleControl.elem);
// containerControl.elem.append(doneListControl.elem);
