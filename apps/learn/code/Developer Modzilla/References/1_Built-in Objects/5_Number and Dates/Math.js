/////// STATIC PROPERTIES //////
const e = Math.E
const ln10 = Math.LN10
const ln2 = Math.LN2
const log10 = Math.LOG10E
const log2e = Math.LOG2E
const pi = Math.PI
const sqrt1_2 = Math.SQRT1_2
const sqrt2 = Math.SQRT2
console.table({
  e, ln10, ln2, log10, log2e, pi, sqrt1_2, sqrt2
})
/////// STATIC METHODS //////
let x = 64
let y = 20
let z = 100
let w = 116
let f = -12
let absolute = Math.abs(x)
let arcCoseno = Math.acos(x)
let hyperArcCoseno = Math.acosh(x)
let arcSeno = Math.asin(x)
let hyperArcSeno = Math.asinh(x)
let arcTang = Math.atan(x)
let arcTangOfQuotient = Math.atan2(y, x)
let hyperArcTang = Math.atanh(x)
let cubeRootOfx = Math.cbrt(x)
let smallestIntOrEqualToX = Math.ceil(x)
let numberOfLeadingZeroBitsOf32BitInt = Math.clz32(x)
let coseno = Math.cos(x)
let hyperCoseno = Math.cosh(x)
let eulerEXPx = Math.exp(x)
let eulerEXPxMinus1 = Math.expm1(x)
let largestIntOrEqualToX = Math.floor(x)
let nearestSinglePrecisionFloatRepresentation = Math.fround(x)
let squareRootOfSumOfSquaresArg = Math.hypot(x)
let res32bitIntMultOfxy = Math.imul(x, y)
let naturalLog = Math.log(x)
let logBase10 = Math.log10(x)
let naturalLogOf1plusX = Math.log1p(x)
let logBase2 = Math.log2(x)
let largestOfZeroOrMore = Math.max(x, y, z, w)
let smallestOfZeroOrMore = Math.min(x)
let baseXofExpPowerY = Math.pow(x, y)
let random = Math.random(x)
let nearestRoundedIntOfX = Math.round(x)
let retSignOfX = Math.sign(f)
let seno = Math.sin(x)
let hyperSeno = Math.sinh(x)
let sqrRoot = Math.sqrt(x)
let tang = Math.tan(x)
let hyperTang = Math.tanh(x)
let intPortionOfXNoDigit = Math.trunc(x)

console.table({
  absolute, arcCoseno, hyperArcCoseno,
  arcSeno, hyperArcSeno, arcTang,
  arcTangOfQuotient, hyperArcTang, cubeRootOfx,
  smallestIntOrEqualToX, numberOfLeadingZeroBitsOf32BitInt, eulerEXPx,
  eulerEXPxMinus1, largestIntOrEqualToX, nearestSinglePrecisionFloatRepresentation,
  squareRootOfSumOfSquaresArg, res32bitIntMultOfxy, naturalLog, naturalLogOf1plusX,
  logBase2, largestOfZeroOrMore, smallestOfZeroOrMore, random, nearestRoundedIntOfX,
  retSignOfX, seno, hyperSeno, sqrRoot, tang, hyperTang, intPortionOfXNoDigit
})