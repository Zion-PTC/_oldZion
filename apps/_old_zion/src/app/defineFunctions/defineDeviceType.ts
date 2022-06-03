import { responsiveObject } from "./responsiveDesignDashboard"

export default function defineDeviceType(callback) {
  const deviceTypes = responsiveObject.deviceTypes
  let screenWidth = window.screen.width
  let screenHeight = window.screen.height
  let ratio = screenWidth / screenHeight
  if (ratio <= 1) { callback(deviceTypes[0]) }
  if (ratio >= 1) { callback(deviceTypes[1]) }
}