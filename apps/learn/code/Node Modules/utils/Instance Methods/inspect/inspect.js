import util from 'util'
/**
 * util.inspect(object[, options])
 * util.inspect(object[, showHidden[, depth[, colors]]])
 * @param {any} object Any JavaScript primitive or Object.
 * @param {Object} options  
    • @param {Boolean} showHidden  If true, object's non-enumerable symbols and properties are included in the formatted result. WeakMap and WeakSet entries are also included as well as user defined prototype properties (excluding method properties). Default: false.
    • @param {Number} depth Specifies the number of times to recurse while formatting object. This is useful for inspecting large objects. To recurse up to the maximum call stack size pass Infinity or null. Default: 2.
    • @param {Boolean} colors If true, the output is styled with ANSI color codes. Colors are customizable. See Customizing util.inspect colors. Default: false.
    • @param {Boolean} customInspect If false, [util.inspect.custom](depth, opts, inspect) functions are not invoked. Default: true.
    • @param {Boolean} showProxy If true, Proxy inspection includes the target and handler objects. Default: false.
    • @param {Integer} maxArrayLength Specifies the maximum number of Array, TypedArray, WeakMap and WeakSet elements to include when formatting. Set to null or Infinity to show all elements. Set to 0 or negative to show no elements. Default: 100.
    • @param {Integer} maxStringLength Specifies the maximum number of characters to include when formatting. Set to null or Infinity to show all elements. Set to 0 or negative to show no characters. Default: 10000.
    • @param {Integer} breakLength The length at which input values are split across multiple lines. Set to Infinity to format the input as a single line (in combination with compact set to true or any number >= 1). Default: 80.
    • @param {Boolean | Integer} compact Setting this to false causes each object key to be displayed on a new line. It will break on new lines in text that is longer than breakLength. If set to a number, the most n inner elements are united on a single line as long as all properties fit into breakLength. Short array elements are also grouped together. For more information, see the example below. Default: 3.
    • @param {Boolean | Function} sorted If set to true or a function, all properties of an object, and Set and Map entries are sorted in the resulting string. If set to true the default sort is used. If set to a function, it is used as a compare function.
    • @param {Boolean | String} getters If set to true, getters are inspected. If set to 'get', only getters without a corresponding setter are inspected. If set to 'set', only getters with a corresponding setter are inspected. This might cause side effects depending on the getter function. Default: false.
    • @param {Boolean} numericSeparator If set to true, an underscore is used to separate every three digits in all bigints and numbers. Default: false.
 * @return The representation of object.
The util.inspect() method returns a string representation of object that is intended for debugging. The output of util.inspect may change at any time and should not be depended upon programmatically. Additional options may be passed that alter the result. util.inspect() will use the constructor's name and/or @@toStringTag to make an identifiable tag for an inspected value.
 */
class Foo {
  get [Symbol.toStringTag]() {
    return 'bar';
  }
}

class Bar {}

const baz = Object.create(null, { [Symbol.toStringTag]: { value: 'foo' } });

console.clear()
console.table({['new Foo())']:util.inspect(new Foo())});
console.log(util.inspect(new Bar()));
console.log(util.inspect(baz));
/**
Circular references point to their anchor by using a reference index:
 */

const obj = {};
obj.a = [obj];
obj.b = {};
obj.b.inner = obj.b;
obj.b.obj = obj;

console.log(util.inspect(obj));
/**
The following example inspects all properties of the util object:
 */
console.log(util.inspect(util, { showHidden: true, depth: null }));
/**
The following example highlights the effect of the compact option:
 */
const o = {
  a: [1, 2, [[
    'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do ' +
      'eiusmod \ntempor incididunt ut labore et dolore magna aliqua.',
    'test',
    'foo']], 4],
  b: new Map([['za', 1], ['zb', 'test']])
};
console.log(util.inspect(o, { compact: true, depth: 5, breakLength: 80 }));

// { a:
//   [ 1,
//     2,
//     [ [ 'Lorem ipsum dolor sit amet,\nconsectetur [...]', // A long line
//           'test',
//           'foo' ] ],
//     4 ],
//   b: Map(2) { 'za' => 1, 'zb' => 'test' } }

// Setting `compact` to false or an integer creates more reader friendly output.
console.log(util.inspect(o, { compact: false, depth: 5, breakLength: 80 }));

// {
//   a: [
//     1,
//     2,
//     [
//       [
//         'Lorem ipsum dolor sit amet,\n' +
//           'consectetur adipiscing elit, sed do eiusmod \n' +
//           'tempor incididunt ut labore et dolore magna aliqua.',
//         'test',
//         'foo'
//       ]
//     ],
//     4
//   ],
//   b: Map(2) {
//     'za' => 1,
//     'zb' => 'test'
//   }
// }

// Setting `breakLength` to e.g. 150 will print the "Lorem ipsum" text in a
// single line.
/**
The showHidden option allows WeakMap and WeakSet entries to be inspected. If there are more entries than maxArrayLength, there is no guarantee which entries are displayed. That means retrieving the same WeakSet entries twice may result in different output. Furthermore, entries with no remaining strong references may be garbage collected at any time.
 */
const obj2 = { a: 1 };
const obj3 = { b: 2 };
const weakSet = new WeakSet([obj2, obj3]);

console.log(util.inspect(weakSet, { showHidden: true }));
// WeakSet { { a: 1 }, { b: 2 } }
/**
The sorted option ensures that an object's property insertion order does not impact the result of util.inspect().
 */
import assert from 'assert'
const o1 = {
  b: [2, 3, 1],
  a: '`a` comes before `b`',
  c: new Set([2, 3, 1])
};
console.log(util.inspect(o1, { sorted: true }));
// { a: '`a` comes before `b`', b: [ 2, 3, 1 ], c: Set(3) { 1, 2, 3 } }
console.log(util.inspect(o1, { sorted: (a, b) => b.localeCompare(a) }));
// { c: Set(3) { 3, 2, 1 }, b: [ 2, 3, 1 ], a: '`a` comes before `b`' }

const o2 = {
  c: new Set([2, 1, 3]),
  a: '`a` comes before `b`',
  b: [2, 3, 1]
};
assert.strict.equal(
  util.inspect(o1, { sorted: true }),
  util.inspect(o2, { sorted: true })
);
/**
The numericSeparator option adds an underscore every three digits to all numbers.
 */
const thousand = 1_000;
const million = 1_000_000;
const bigNumber = 123_456_789n;
const bigDecimal = 1_234.123_45;

console.log(thousand, million, bigNumber, bigDecimal);
// 1_000 1_000_000 123_456_789n 1_234.123_45
/**
util.inspect() is a synchronous method intended for debugging. Its maximum output length is approximately 128 MB. Inputs that result in longer output will be truncated.
 * Customizing util.inspect colors
Color output (if enabled) of util.inspect is customizable globally via the util.inspect.styles and util.inspect.colors properties.

util.inspect.styles is a map associating a style name to a color from util.inspect.colors.

The default styles and associated colors are:

  • bigint: yellow
  • boolean: yellow
  • date: magenta
  • module: underline
  • name: (no styling)
  • null: bold
  • number: yellow
  • regexp: red
  • special: cyan (e.g., Proxies)
  • string: green
  • symbol: green
  • undefined: grey

Color styling uses ANSI control codes that may not be supported on all terminals. To verify color support use tty.hasColors().

Predefined control codes are listed below (grouped as "Modifiers", "Foreground colors", and "Background colors").
 * Modifiers
Modifier support varies throughout different terminals. They will mostly be ignored, if not supported.
    • reset - Resets all (color) modifiers to their defaults
    • bold - Make text bold
    • italic - Make text italic
    • underline - Make text underlined
    • strikethrough - Puts a horizontal line through the center of the text (Alias: strikeThrough, crossedout, crossedOut)
    • hidden - Prints the text, but makes it invisible (Alias: conceal)
    • dim - Decreased color intensity (Alias: faint)
    • overlined - Make text overlined
    • blink - Hides and shows the text in an interval
    • inverse - Swap foreground and background colors (Alias: swapcolors, swapColors)
    • doubleunderline - Make text double underlined (Alias: doubleUnderline)
    • framed - Draw a frame around the text
 * Foreground colors
    • black
    • red
    • green
    • yellow
    • blue
    • magenta
    • cyan
    • white
    • gray (alias: grey, blackBright)
    • redBright
    • greenBright
    • yellowBright
    • blueBright
    • magentaBright
    • cyanBright
    • whiteBright
 * Background colors
    • bgBlack
    • bgRed
    • bgGreen
    • bgYellow
    • bgBlue
    • bgMagenta
    • bgCyan
    • bgWhite
    • bgGray (alias: bgGrey, bgBlackBright)
    • bgRedBright
    • bgGreenBright
    • bgYellowBright
    • bgBlueBright
    • bgMagentaBright
    • bgCyanBright
    • bgWhiteBright
 * Custom inspection functions on objects
Objects may also define their own [util.inspect.custom](depth, opts, inspect) function, which util.inspect() will invoke and use the result of when inspecting the object.
 */
class Box {
  constructor(value) {
    this.value = value;
  }

  [util.inspect.custom](depth, options, inspect) {
    if (depth < 0) {
      return options.stylize('[Box]', 'special');
    }

    const newOptions = Object.assign({}, options, {
      depth: options.depth === null ? null : options.depth - 1
    });

    // Five space padding because that's the size of "Box< ".
    const padding = ' '.repeat(5);
    const inner = util.inspect(this.value, newOptions)
                  .replace(/\n/g, `\n${padding}`);
    return `${options.stylize('Box', 'special')}< ${inner} >`;
  }
}

const box = new Box(true);

console.log(util.inspect(box));
/**
Custom [util.inspect.custom](depth, opts, inspect) functions typically return a string but may return a value of any type that will be formatted accordingly by util.inspect().
 */
// Returns: "Box< true >"
const obj4 = { foo: 'this will not show up in the inspect() output' };
obj4[util.inspect.custom] = (depth) => {
  return { bar: 'baz' };
};

util.inspect(obj4);
// Returns: "{ bar: 'baz' }"
/**
 * util.inspect.custom
 * @param {Symbol} • that can be used to declare custom inspect functions.
In addition to being accessible through util.inspect.custom, this symbol is registered globally and can be accessed in any environment as Symbol.for('nodejs.util.inspect.custom').

Using this allows code to be written in a portable fashion, so that the custom inspect function is used in an Node.js environment and ignored in the browser. The util.inspect() function itself is passed as third argument to the custom inspect function to allow further portability.
 */
const customInspectSymbol = Symbol.for('nodejs.util.inspect.custom');

class Password {
  constructor(value) {
    this.value = value;
  }

  toString() {
    return 'xxxxxxxx';
  }

  [customInspectSymbol](depth, inspectOptions, inspect) {
    return `Password <${this.toString()}>`;
  }
}

const password = new Password('r0sebud');
console.log(password);
// Prints Password <xxxxxxxx>
/**
 * See Custom inspection functions on Objects for more details.
 * 
 * util.inspect.defaultOptions
The defaultOptions value allows customization of the default options used by util.inspect. This is useful for functions like console.log or util.format which implicitly call into util.inspect. It shall be set to an object containing one or more valid util.inspect() options. Setting option properties directly is also supported.
 */
const arr = Array(101).fill(0);

console.log(arr); // Logs the truncated array
util.inspect.defaultOptions.maxArrayLength = null;
console.log(arr); // logs the full array