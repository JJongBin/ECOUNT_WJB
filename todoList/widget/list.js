export function createList(option) {
  var elem = document.createElement("ul");
  elem.style.listStyle = "none";
  elem.style.padding = "0";
  elem.id = option.id;

  render(option.datas, option.columns);

  return {
    elem: elem,
    reload: function (datas) {
      elem.innerHTML = "";
      render(datas, option.columns);
    },
  };

  function render(datas, columns) {
    datas.forEach(function (data) {
      var liElem = document.createElement("li");

      columns.forEach(function (column) {
        var control = column.render(data);
        liElem.append(control);
      });

      elem.append(liElem);
    });
  }
}
