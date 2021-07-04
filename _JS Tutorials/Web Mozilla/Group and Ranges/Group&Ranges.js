// ================= GROUPS AND RANGES =================

// Groups and ranges indicate groups and ranges of
// expression characters.

const aliceExcerpt = 'The Caterpillar and Alice looked at each other';
const regexpWithoutE = /\b[a-df-z]+\b/ig;
console.log(aliceExcerpt.match(regexpWithoutE));

const imageDescription = 'This image has a resolution of 1440x900 pixels.';
const regexpSize = /([0-9]+)x([0-9]+)/;
const match = imageDescription.match(regexpSize);
console.log(`Width: ${match[1]} / Heigth: ${match[2]}.`);

// source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges#using_groups