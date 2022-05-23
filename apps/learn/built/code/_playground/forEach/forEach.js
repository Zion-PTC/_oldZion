"use strict";
const array = [1, 2, 3, 4, 5, 6];
const callback = function (value, index, array) {
    console.log('value', value);
    console.log('index', index);
    console.log('array', array);
    //@ts-expect-error
    console.log('this', this);
};
let thisObj = 1;
array.forEach(callback, thisObj);
