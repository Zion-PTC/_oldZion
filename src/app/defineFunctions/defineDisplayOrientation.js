import { responsiveObject } from "./responsiveDesignDashboard"

export default function defineDisplayOrientation(callback) {
  const orientations = responsiveObject.orientations
  var orientation = responsiveObject.orientation
  const screenOrientation = window.matchMedia(orientation)
  if (screenOrientation.matches) {
    callback(orientations[0])
  }
  if (!screenOrientation.matches) {
    callback(orientations[1])
  }
}