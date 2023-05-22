export function CricleData(items) {
  var items = items || new Array();

  this.insertItem = function (item) {
    items.push(item);
  };

  this.getAllItems = function () {
    return items;
  };
}

CricleData.prototype.getNext = function (item) {
  var items = this.getAllItems();
  var index = items.indexOf(item);
  var next = items[index + 1];

  return next ? next : items[0];
};
