"use strict";
// second
// last()
const last = (arr) => {
    return arr[arr.length - 1];
};
const l = last([1, 2, 3]);
const l2 = last(['a', 'b', 'c']);
const makeArr = (x) => {
    return [x];
};
const v = makeArr(5);
const v2 = makeArr('a');
const makeDoubleArray = (x, y) => {
    return [x, y];
};
let c = 10;
const v3 = makeDoubleArray(1, 2);
const v4 = makeDoubleArray('a', 'b');
const v5 = makeDoubleArray('b', 3);
const v6a = makeDoubleArray(19, 'b');
const v6b = makeDoubleArray(c, 'b');
const v6c = makeDoubleArray(null, 'b');
const makeTuple = (x, y) => {
    return [x, y];
};
const v7 = makeTuple(1, 2);
const v8 = makeTuple('a', 'b');
const v9 = makeTuple(1, 'a');
const v10 = makeTuple(1, 'a');
const makeTupleDefault = (x, y) => {
    return [x, y];
};
const v11 = makeTupleDefault(1, 'a');
const makeFullName = (obj) => {
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName,
    };
};
const v12 = makeFullName({
    firstName: 'bob',
    lastName: 'junior',
    // age: 15, // TS si lamenta
});
const makeFullName1 = (obj) => {
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName,
    };
};
const v13 = makeFullName1({
    firstName: 'bob',
    lastName: 'junior',
    age: 15,
});
