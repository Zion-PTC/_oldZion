const foo = function (value, callback) {
  let newValue = callback(value);
  return newValue;
};

const doo = function (e) {
  return e + 1;
};

const back = foo(4, doo);
console.log(back);
