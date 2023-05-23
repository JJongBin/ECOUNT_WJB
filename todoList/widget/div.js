export function createDiv(option) {
  var elem = document.createElement("div");
  elem.id = option.id;
  option.parent.append(elem);

  return {
    elem: elem,
  };
}
