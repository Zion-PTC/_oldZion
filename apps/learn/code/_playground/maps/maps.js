let a = [1, 2];
let b = a.map((value, index, array) => {
  return [index, value];
});
console.log(b);
