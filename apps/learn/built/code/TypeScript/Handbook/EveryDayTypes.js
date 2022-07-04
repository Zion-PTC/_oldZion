"use strict";
function greet(name) {
    console.log('Hello, ' + name.toUpperCase() + '!!');
}
function getFavoriteNumber() {
    return 26;
}
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
function printName1(obj) {
    console.log('printName1: ' + obj.first, obj.last);
}
printName1({ first: 'Bob' });
printName1({ first: 'Alice', last: 'Alisson' });
function printName2(obj) {
    console.log('printName2: ' + obj.first + ' ' + obj.last?.toUpperCase());
}
printName2({ first: 'Bob' });
printName2({ first: 'Alice', last: 'Alisson' });
function printName3(obj) {
    let condition = obj.last === undefined;
    if (condition) {
        return;
    }
    console.log('printName4: ' + obj.last.toUpperCase());
}
printName3({ first: 'Bob' });
printName3({ first: 'Alice', last: 'Alisson' });
function printId(id) {
    console.log('Your ID is: ' + id);
}
printId(101);
printId('202');
printId({ myId: 2222 });
function printID2(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printID2(101);
printID2('202asda');
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log('Hello, ' + x.join(' and '));
    }
    else {
        console.log('Welcome lone traveler ' + x);
    }
}
welcomePeople(['ciao', 'mamma']);
welcomePeople('paolo');
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(getFirstThree('cavolacchio'));
function TypeAliases() { }
