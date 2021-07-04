// x|y
// Mathes either "x" or "y". For example, /green|red/
// matches "green" in "gree apple" and "red" in "red apple"

// [xyz]
// [a-c]
// A character class. Matches any one of the enclosed
// characters. You can specify a range of charachters by
// using an hyphen, but if the hyphen appears as the first
// of the last character enclosed in the square brackets it
// is taken as a literal hyphen to be included in the
// character class as a normal character.
// For example, [abcd] is the same as [a-d]. Thet match the
// "b" in "brisket", and the "c" in "chop". [abcd-] and
// [-abcd] match the "b" in "brisket", the "c" in "chop",
// and the "-" (hyphen) in "non-profit". [\w-] is the same
// as [A-Aa-z0-9_-]. Thet both match the "b" in "brisket",
// the "c" in "chop", and the "n" in "non-profit".

// [^xyz]
// [^a-c]
// A negated or complemented character class. That is, it
// matches anything that is not enclosed in the brackets.
// You can specify a range of characters by using a hyphen,
// but if the hyphen appears as the first or last character
// enclosed in the square brackets it is taken as a literal
// hyphen to be included in the character class as a normal
// character. For example, [^abc] is the same as [^a-c].
// They initially match "o" in "bacon" and "h" in "chop".
// NOTE: The ^ character may also indicate the beginning of input.

// (x)
// Capturing group: Matches x and remembers the match. For
// example, /(foo)/ matches and remembers "foo" in "foo
// bar". 
// A regular expression may have multiple capturing groups.
// In results, matches to capturing groups typically in an
// array whose members are in the same order as the left
// parentheses in the capturing group. This is usually just
// the order of the capturing groups themselves. This
// becomes important when capturing groups are nested.
// Matches are accessed using the index of the result's
// elements ([1], ..., [n]) or from the predefined RegExp
// object's properties ($1, ..., $9).
// Capturing groups have a performance penalty. If you don't
// need the matched substring to be recalled, prefer
// non-capturing parentheses (see below).
// String.match() won't return groups if the /.../g flag is
// set. However, you can still use String.matchAll() to get
// all matches.

// \n
// Where "n" is a positive integer. A back reference to the
// last substring matching the n parenthetical in the
// regular expression (counting left parentheses). For
// example, /apple(,)\sorange\1/ matches "apple, orange," in
// "apple, orange, cherry, peach".

//\k<Name>
// A back reference to the last substring matching the Named
// capture group specified by <Name>. For example,
// /(?<title>\w+), yes \k<title>/ matches "Sir, yes Sir" in
// "Do you copy? Sir, yes Sir!". NOTE: \k is used literally
// here to indicate the beginning of a back reference to a
// Named capture group.

// (?<Name>x)
// Named capturing group: Matches "x" and stores it on the
// groups property of the returned matches under the name
// specified by <Name>. The angle brackets (< and >) are
// required for group name. For example, to extract the
// United States area code from a phone number, we could use
// /\((?<area>\d\d\d)\)/. The resulting number would appear
// under matches.groups.area.

// (?:x)
// Non-capturing group: Matches "x" but does not remember
// the match. The matched substring cannot be recalled from
// the resulting array's elements ([1], ..., [n]) or from
// the predefined RegExp object's properties ($1, ..., $9).

// EXAMPLES

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

// COUNTIN VOWELS
var aliceExcerpt = "There was a long silence after this, and Alice could only hear whispers now and then."
var regexpVowels = /[aeiouy]/g;
console.log("Number of vowels:", aliceExcerpt.match(regexpVowels).length);

// USING GROUPS
let personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;
let regexpNames = /First_Name: (\w+), Last_Name: (\w+)/mg;
let match = regexpNames.exec(personList);
do {
  console.log(`Hello ${match[1]} ${match[2]}`);
} while ((match = regexpNames.exec(personList)) !== null)

// USING NAMED GROUPS
let regexpNames2 = /First_Name: (?<firstname>\w+), Last_Name: (?<lastname>\w+)/mg;
let match2 = regexpNames2.exec(personList);
do {
  console.log(`Hello ${match2.groups.firstname} ${match2.groups.lastname}`);
} while ((match2 = regexpNames2.exec(personList)) !== null);