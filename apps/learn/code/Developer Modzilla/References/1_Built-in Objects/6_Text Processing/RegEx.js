/**
 * source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
 * REGEXP
 * The RegExp object is used for matching text with a pattern.
 * For an introduction to regular expressions, read the Regular Expressions chapter in the JavaScript Guide.
 * Description
 */
/**
 * Literal notation and constructor
 * There are two ways to create a RegExp object: a literal notation and a constructor.
 *
 * The literal notation's parameters are enclosed between slashes and do not use quotation marks.
 * The constructor function's parameters are not enclosed between slashes but do use quotation marks.
 * The following three expressions create the same regular expression object:
 */
function LiteralNotationAndContructore(params) {
  /**
   * let re = /ab+c/i; // literal notation
   * @param {RegExp} literlaNotation espressione del tipo /ab+c/i
   */
  function literalNotation(literlaNotation) {
    let literalNotation = /ab+c/i;
    literlaNotation; // literal notation
  }
  /**
   * let re = new RegExp('ab+c', 'i'); // constructor with string pattern as first argument
   * @param {RegExp} stringPattern
   * @param {RegExp} flag Regular Expression Flag
   */
  function strinPattern(stringPattern, flag) {
    let stringPattern = 'ab+c';
    let flag = 'i';
    new RegExp(stringPattern, flag);
  }
  /**
   * let re = new RegExp(/ab+c/, 'i'); // constructor with regular expression literal as first argument (Starting with ECMAScript 6)
   * @param {*} expressionLiteral
   * @param {*} flag Regular Expression Flag
   */
  function expressionLiteral(expressionLiteral, flag) {
    let re = new RegExp(/ab+c/, 'i');
  }
}
/**
 * The literal notation results in compilation of the regular expression when the expression is evaluated. Use literal notation when the regular expression will remain constant. For example, if you use literal notation to construct a regular expression used in a loop, the regular expression won't be recompiled on each iteration.

The constructor of the regular expression object—for example, new RegExp('ab+c')—results in runtime compilation of the regular expression. Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and obtain it from another source, such as user input.
 */
/**
 * Flags in constructor
Starting with ECMAScript 6, new RegExp(/ab+c/, 'i') no longer throws a TypeError ("can't supply flags when constructing one RegExp from another") when the first argument is a RegExp and the second flags argument is present. A new RegExp from the arguments is created instead.

When using the constructor function, the normal string escape rules (preceding special characters with \ when included in a string) are necessary.

For example, the following are equivalent:
 */
function FlagsInConstructor() {
  let re1 = /\w+/;
  let re2 = new RegExp('\\w+');
}
/**
 * Perl-like RegExp properties
Note that several of the RegExp properties have both long and short (Perl-like) names. Both names always refer to the same value. (Perl is the programming language from which JavaScript modeled its regular expressions.). See also deprecated RegExp properties.
 */
///CONSTRUCTOR
/**
 *
 * @param {RegExp} pattern una string con la RegularExpression o una Regular expression che cominci con e finisca con \
 * @param {*} flags
 * @returns
 */
function constructor(pattern, flags) {
  return new RegExp(pattern, flags);
}
/// STATIC PROPERTIES
function staticProperties() {}
