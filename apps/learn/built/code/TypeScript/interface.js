"use strict";
class Ball {
    //@ts-expect-error
    name;
    //@ts-expect-error
    dimension;
    //@ts-expect-error
    creationDate;
}
let date = new Date().getDate();
console.log(date);
const person1 = {
    first: 'Jeff',
    last: 'Delanay',
};
const person2 = {
    first: 'Usain',
    last: 'Bolt',
    fast: true,
};
