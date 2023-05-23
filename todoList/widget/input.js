export function createInput(option) {
  var elem = document.createElement("input");
  elem.id = option.id;
  elem.type = option.type || "textg";

  if (option.checked) elem.checked = option.checked;
  if (option.onChange)
    elem.addEventListener("change", function (e) {
      option.onChange(e);
    });

  return {
    elem: elem,
    getValue: function () {
      return elem.value;
    },
    valueReset: function () {
      elem.value = "";
    },
  };
}
