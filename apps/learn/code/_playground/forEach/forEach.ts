const array = [1, 2, 3, 4, 5, 6];

const callback = function <V, I, A>(
  value: V,
  index: I,
  array: A
) {
  console.log('value', value);
  console.log('index', index);
  console.log('array', array);
  console.log('this', this);
};

let thisObj = 1;
array.forEach(callback, thisObj);
