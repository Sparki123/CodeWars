Array.prototype.insert = function (index, value) {
  
  const length = this.length - 1;
  if (index > length) {
    index = length + 1;
  }

  for (let i = length; i >= index; i--) {
    this[i + 1] = this[i];
  }
  
  this[index] = value;
  
  return this;
 
}

Object.defineProperty(Array.prototype, "insert", {
  enumerable:false
})