const obj = {};
Object.defineProperty(obj, "a", {
  get() {
    return 100;
  },
  enumerable: true,
  configurable: false,
});
console.log(obj.a);
obj.a = 11;
console.log(obj.a);

const o = {};
Object.defineProperty(o, "a", {
  value: 1,
  writable: true,
  configurable: false,
}); // throws a TypeError
// (even though the new get does exactly the same thing)
Object.defineProperty(o, "a", {
  value: 12,
});
