const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const callback = function (value, index, array) {
  console.log('value', value);
  console.log('index', index);
  console.log('array', array);
  console.log('this', this);
};

arr.every(callback, 'something');
