import { responsiveObject } from "./responsiveDesignDashboard"

export default function defineColSize(callback) {
  var bp1 = responsiveObject.bp1
  var bp2 = responsiveObject.bp2
  let screenWidth = window.screen.width
  let colSize = (screenWidth * (90 / 100) / 2) / 16

  if (screenWidth <= bp1 * 16) {
    callback(colSize)
  }

  if (screenWidth >= bp2 * 16) {
    callback(colSize / 3)
  }

}