var bp1 = 64
var bp2 = 89.9
var breakPoint1 = `${bp1}em`
var breakPoint2 = `${bp2}em`
var smBreakPoint = '(max-width: ' + breakPoint1 + ')'
var mdInBreakPoint = '(min-width: ' + breakPoint1 + ')'
var mdOutBreakPoint = '(max-width: ' + breakPoint2 + ')'
var lgBreakPoint = '(min-width: ' + breakPoint2 + ')'
var breakPoints = [smBreakPoint, mdInBreakPoint, mdOutBreakPoint, lgBreakPoint]
// Media Query Lists
const small = {
  name: 'Small',
  mql: window.matchMedia(breakPoints[0])
}
const midIn = {
  name: 'Medium',
  mql: window.matchMedia(mdInBreakPoint)
}
const midOut = {
  name: 'Medium',
  mql: window.matchMedia(mdOutBreakPoint)
}
const large = {
  name: 'Large',
  mql: window.matchMedia(lgBreakPoint)
}
const breakPointsMql = [small.mql, midIn.mql, midOut.mql, large.mql]
const deviceTypes = ['Phone or Tablet', 'Desktop']
const orientations = ['Portrait', 'Landscape']
const orientation = "(orientation: portrait)"
const orientationMql = window.matchMedia(orientation)

export const responsiveObject = {
  bp1,
  bp2,
  breakPoint1,
  breakPoint2,
  smBreakPoint,
  mdInBreakPoint,
  mdOutBreakPoint,
  lgBreakPoint,
  breakPoints,
  // Media Query Lists
  small,
  midIn,
  midOut,
  large,
  breakPointsMql,
  deviceTypes,
  orientations,
  orientation,
  orientationMql
}