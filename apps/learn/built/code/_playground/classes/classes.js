"use strict";
function test1() {
    let obj = {
        id: 'id',
        bot: 'bot',
    };
    let b = {
        id: '',
        bot: '',
    };
    Object.defineProperty(b, 'prototype.name', { value: 'bob' });
    console.log(b.constructor);
}
