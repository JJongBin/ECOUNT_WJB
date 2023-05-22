export function Item(name, onClick) {
  var name = name;
  var btnElem = document.createElement("button");
  var _self = this;

  btnElem.textContent = name;
  btnElem.addEventListener("click", function () {
    onClick(_self);
  });

  this.getName = function () {
    return name;
  };

  this.getItemElem = function () {
    return btnElem;
  };
}

Item.prototype.render = function (parentElem) {
  parentElem.append(this.getItemElem());
};

Item.prototype.disable = function (value) {
  const item = this.getItemElem();

  if (value) item.setAttribute("disabled", value);
  else item.removeAttribute("disabled");
};
