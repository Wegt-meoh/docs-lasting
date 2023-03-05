const obj = {};
Object.defineProperty(obj, "key1", {
  enumerable: true,
  get: function () {
    return "222";
  },
  set: function (v) {},
});
console.log(obj.key1);
obj.key1 = 100;
console.log(obj.key1);
