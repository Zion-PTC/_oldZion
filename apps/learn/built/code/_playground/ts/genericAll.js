"use strict";
function identity(arg) {
    return arg;
}
let myid1 = identity;
function iReturnAString(a) {
    return a;
}
let res = identity(iReturnAString('1'));
let myIdentity = function (arg) {
    return arg;
};
let myIdentity1 = function (arg) {
    return arg;
};
function concatNumbers(a, b) {
    let conc;
    if (typeof a === 'string' && typeof b === 'string')
        conc = a + b;
    if (typeof a === 'number' && typeof b === 'string')
        conc = a.toString() + b;
    if (typeof a === 'number' && typeof b === 'number')
        conc = a + b;
    return conc;
}
let concatRes = concatNumbers('1', 1);
console.log(concatRes);
myIdentity(1);
myIdentity1(1);
let a;
a = 'ciao';
let b = define(a);
let c1 = 1;
let d = define(c1);
