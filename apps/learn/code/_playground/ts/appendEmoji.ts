let appendEmoji = (fixed: string) => (dynamic: string) => fixed + dynamic;

let sun = appendEmoji('☄️');
let rain = appendEmoji('🌧');

console.log(sun(' today'));
console.log(rain(' tomorrow'));
