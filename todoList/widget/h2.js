export function createH2(option) {
  var elem = document.createElement("h2");
  elem.textContent = option.content;

  return {
    elem: elem,
  };
}
