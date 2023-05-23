export function createButton(option) {
  var elem = document.createElement("button");
  elem.textContent = option.label;
  if (option.id) elem.id = option.id;

  elem.addEventListener("click", option.onClick);

  return {
    elem: elem,
  };
}
