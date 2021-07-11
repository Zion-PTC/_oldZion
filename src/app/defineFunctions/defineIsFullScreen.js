import { store } from "../store"
import { responsiveObject } from "./responsiveDesignDashboard"

export default function defineIsFullscreen(callback) {
  const orientations = responsiveObject.orientations
  const deviceTypes = responsiveObject.deviceTypes
  let ratiow = window.screen.width / window.innerWidth
  let ratioh = window.screen.width / window.innerHeight
  let displayOrientation = store.getState().responsiveDesign.orientation
  let device = store.getState().userDevice.deviceType

  if (displayOrientation === orientations[0]) {
    if (ratiow === 1) { callback(true) }
    if (ratiow !== 1) { callback(false) }
  }
  if (displayOrientation === orientations[1]) {
    if (device === deviceTypes[0]) {
      if (ratioh === 1) { callback(true) }
    }
    if (device === deviceTypes[1]) {
      if (ratiow === 1) { callback(true) }
      if (ratiow !== 1) { callback(false) }
    }
  }
}