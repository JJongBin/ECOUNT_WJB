export default function Menu(name, time) {
  var name = name;
  var time = time;

  this.getName = function () {
    return name;
  };

  this.getTime = function () {
    return time;
  };
}
