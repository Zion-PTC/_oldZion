import { responsiveObject } from "./responsiveDesignDashboard"

export default function defineDisplay(e, callback) {
  var breakPoints = responsiveObject.breakPoints
  const small = responsiveObject.small
  const midIn = responsiveObject.midIn
  const midOut = responsiveObject.midOut
  const large = responsiveObject.large
  const breakPointsMql = responsiveObject.breakPointsMql

  let media = e.media
  let matches = e.matches

  switch (media) {
    case breakPoints[0]:
      if (matches) { callback(small.name) }
      break;

    case breakPoints[1]:
      if (matches) {
        if (breakPointsMql[2].matches) { callback(midIn.name) }
        if (!breakPointsMql[2].matches) { }
      }
      break;

    case breakPoints[2]:
      if (matches) {
        if (breakPointsMql[1].matches) { callback(midOut.name) }
        if (!breakPointsMql[1].matches) { }
      }
      break;

    case breakPoints[3]:
      if (matches) {
        if (!breakPointsMql[2].matches) { callback(large.name) }
        if (breakPointsMql[2].matches) { }
      }
      break;

    default:
      break;
  }
}