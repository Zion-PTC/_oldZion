let getFilenameFromPath = () => {
  const __filename = new URL(import.meta.url).pathname;
  return __filename.match(/(?<=[/])\w*[.]\w*/g)
}
let filename = getFilenameFromPath()

let a = null
let b = undefined
let c = NaN

let isAStrictlyB = a === b;
let isALooselyB = a == b;
let isALooselyC = a == c;
console.log('\nFile: ' + filename);
console.log('Null, undefined and NaN');
console.table({
  a, b, c,
  ['a === b']: isAStrictlyB,
  ['a == b']: isALooselyB,
  ['a == c']: isALooselyC,
})

let xBig = 0n
let x = 0
let xString = '0'
let isXBigStriclyX = xBig === x
let isXBigLooselyX = xBig == x
console.log('Equality and Strict Equality on Big Int');
console.table({
  xBig, x, xString,
  ['xBig === x']: isXBigStriclyX,
  ['xBig == x']: isXBigLooselyX
})

