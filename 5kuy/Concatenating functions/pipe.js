var addOne = function(e) {return e + 1;};
var square = function(e) {return e * e;};

Object.prototype.pipe = function (fn) {
  return (...args) => fn(this(...args));
};