function getData(option) {
  return todoList.filter(function (item) {
    return item.done === option.done;
  });
}

function render() {
  Widget.getControl("todoList").reload(getData({ done: false }));
  Widget.getControl("doneList").reload(getData({ done: true }));
}

function insertTodo() {
  var inputControl = Widget.getControl("todoInput");
  var value = inputControl.getValue();
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

function renderCheckBox(data) {
  var inputControl = Widget.input({
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
