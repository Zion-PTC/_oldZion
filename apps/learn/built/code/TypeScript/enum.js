"use strict";
var Colors1;
(function (Colors1) {
    Colors1[Colors1["Blue"] = 0] = "Blue";
    Colors1[Colors1["Green"] = 1] = "Green";
})(Colors1 || (Colors1 = {}));
console.log(Colors1.Blue);
var Colors2;
(function (Colors2) {
    Colors2["Blue"] = "blue";
    Colors2["Green"] = "gree";
})(Colors2 || (Colors2 = {}));
console.log(Colors2.Blue);
function showColor(color) {
    console.log(color);
}
showColor(Colors2.Blue);
var Colors3;
(function (Colors3) {
    Colors3["Blue"] = "blue";
    Colors3["Green"] = "green";
})(Colors3 || (Colors3 = {}));
const ColorsObj = {
    Blue: 'blue',
    Green: 'gree',
};
function showColor2(color) {
    console.log(color);
}
showColor2('blue');
var Colors4;
(function (Colors4) {
    Colors4["Blue"] = "blue";
    Colors4["Green"] = "green";
})(Colors4 || (Colors4 = {}));
const ColorsObj2 = {
    Blue: 'blue',
    Green: 'gree',
};
const ColorsObj3 = {
    Blue: 'blue',
    Green: 'green',
};
function showColor3(color) {
    console.log(color);
}
showColor3('blue');
showColor3(ColorsObj3.Blue);
var Colors5;
(function (Colors5) {
    Colors5["Blue"] = "blue";
    Colors5["Green"] = "green";
})(Colors5 || (Colors5 = {}));
const ColorsObj4 = {
    Blue: 'blue',
    Green: 'green',
};
function showColor4(color) {
    console.log(color);
}
showColor4('green');
showColor4(ColorsObj4.Green);
