const test = new Map();

test.set("a", () => {
  return "hello";
});
console.log(test.get("a"));
