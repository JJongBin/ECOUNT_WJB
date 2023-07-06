export default function ItemControl(id, value) {
  var items = value || [];
  var id = id;

  this.getId = function () {
    return id;
  };

  this.add = function (item) {
    items.push(item);
    this.render(id);
  };

  this.remove = function (item) {
    items.splice(items.indexOf(item), 1);
    this.render(id);
  };

  this.getAll = function () {
    return items.slice();
  };
}

ItemControl.prototype.render = function () {
  var itemsElem = document.querySelector(this.getId());

  itemsElem.innerHTML = "";
  this.getAll().forEach(function (item) {
    var liElem = document.createElement("li");
    liElem.textContent = item.getName();
    itemsElem.append(liElem);
  });
};
