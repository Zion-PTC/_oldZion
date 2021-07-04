// ======================= REGEXP =======================

// Regular expressions are patterns used to match character
// combinations in strings. In JavaScript, regular
// expressions are also objects. These patterns are used
// with the exec() and test() methods of RegExp, and with
// the match(), matchAll(), replace(), replaceAll(),
// search(), and split() methods of String. This chapter
// describes JavaScript regular expressions.

// ======= CREATING A REGULAR EXPRESSION =======

// You construct a regular expression in one of two ways:

// * Using a regular expression literal, which consists of a
//   pattern enclosed between slashes, as follows:

let re1 = /ab+c/;

//   Regular expression literals provide compilation of the
//   regular expression when the script is loaded. If the
//   regular expression remains constant, using this can
//   improve performance.

// * Or calling the constructor function of the RegExp
//   object, as follows:

let re2 = new RegExp('ab+c');

//   Using the constructor function provides runtime
//   compilation of the regular expression. Use the
//   constructor function when you know the regular
//   expression pattern will be changing, or you don't know
//   the pattern and are getting it from another source,
//   such as user input.

// ======= WRITING A REGULAR EXPRESSION PATTERN =======

// A regular expression pattern is composed of simple
// characters, such as /abc/, or a combination of simple and
// special characters, such as /ab*c/ or /Chapter
// (\d+)\.\d*/. The last example includes parentheses, which
// are used as a memory device. The match made with this
// part of the pattern is remembered for later use, as
// described in Using groups.

// Note: If you are already familiar with the forms of a
// regular expression, you may also read the cheatsheet for
// a quick lookup for a specific pattern/construct.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet

// ======== USING SIMPLE PATTERNS ======

// Simple patterns are constructed of characters for which
// you want to find a direct match. For example, the pattern
// /abc/ matches character combinations in strings only when
// the exact sequence "abc" occurs (all characters together
// and in that order). Such a match would succeed in the
// strings "Hi, do you know your abc's?" and "The latest
// airplane designs evolved from slabcraft." In both cases
// the match is with the substring "abc". There is no match
// in the string "Grab crab" because while it contains the
// substring "ab c", it does not contain the exact substring
// "abc".

// ======== USING SPECIAL CHARACTERS ======

// When the search for a match requires something more than
// a direct match, such as finding one or more b's, or
// finding white space, you can include special characters
// in the pattern. For example, to match a single "a"
// followed by zero or more "b"s followed by "c", you'd use
// the pattern /ab*c/: the * after "b" means "0 or more
// occurrences of the preceding item." In the string
// "cbbabbbbcdebc", this pattern will match the substring
// "abbbbc".

// The following pages provide lists of the different
// special characters that fit into each category, along
// with descriptions and examples

// ===>>>> ASSERTIONS
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions
//   Assertions include boundaries, which indicate the
//   beginnings and endings of lines and words, and other
//   patterns indicating in some way that a match is
//   possible (including look-ahead, look-behind, and
//   conditional expressions).

// ===>>>> CHARACTER CLASSES
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
//   Distinguish different types of characters. For example,
//   distinguishing between letters and digits.

// ===>>>> GROUPS AND RANGES
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
//   Indicate groups and ranges of expression characters.

// ===>>>> QUANTIFIERS
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers
//   Indicate numbers of characters or expressions to match.

// ===>>>> UNICODE PROPERTY ESCAPES
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes
//   Distinguish based on unicode character properties, for
//   example, upper- and lower-case letters, math symbols,
//   and punctuation.