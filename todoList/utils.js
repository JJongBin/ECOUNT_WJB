function getData(option) {
  return todoList.filter(function (item) {
    return item.done === option.done;
  });
}

function render() {
  todoListControl.reload(getData({ done: false }));
  doneListControl.reload(getData({ done: true }));
}

function insertTodo() {
  todoList.push({
    id: crypto.randomUUID(),
    content: inputControl.getValue(),
    done: false,
  });

  inputControl.valueReset();
  render();
}

function renderCheckBox(data) {
  var inputControl = Widget.input({
    id: "todoInput",
    type: "checkBox",
    checked: data.done,
    onChange: function (e) {
      data.done = e.target.checked;
      render();
    },
  });

  return inputControl.elem;
}

function renderContent(data) {
  var spanContrl = Widget.span({ content: data.content });
  return spanContrl.elem;
}

function renderDeleteBtn(data) {
  var delBtnContrl = Widget.button({
    label: "삭제",
    onClick: function () {
      todoList.splice(todoList.indexOf(data), 1);
      render();
    },
  });
  return delBtnContrl.elem;
}
