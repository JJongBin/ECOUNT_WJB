export function createSpan(option) {
  var elem = document.createElement("span");
  elem.textContent = option.content;

  return {
    elem: elem,
  };
}
