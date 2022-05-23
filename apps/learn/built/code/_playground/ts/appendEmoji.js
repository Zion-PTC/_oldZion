"use strict";
let appendEmoji = (fixed) => (dynamic) => fixed + dynamic;
let sun = appendEmoji('☄️');
let rain = appendEmoji('🌧');
console.log(sun(' today'));
console.log(rain(' tomorrow'));
