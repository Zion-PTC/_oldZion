import { setColSize, setGridPa } from "../features/productArea/productAreaSlice";
import { setDisplay, setDisplayOrientation, setIsFullscreen } from "../features/responsiveDesign/responsiveDesingSlice";
import { setDeviceType, setScreenDimensions } from "../features/userDevice/userDeviceSlice";
import { store } from "./store";
import defineDeviceType from "./defineFunctions/defineDeviceType";
import defineScreenDimensions from "./defineFunctions/defineScreenDimensions";
import defineDisplayOrientation from "./defineFunctions/defineDisplayOrientation";
import defineIsFullscreen from "./defineFunctions/defineIsFullScreen";
import defineDisplay from "./defineFunctions/defineDisplay";
import defineColSize from "./defineFunctions/defineColSize";
import defineGridPa from "./defineFunctions/defineGridPa";
import { responsiveObject } from "./defineFunctions/responsiveDesignDashboard";

export default function appLogic() {
  const breakPointsMql = responsiveObject.breakPointsMql
  const orientationMql = responsiveObject.orientationMql

  const dispatchSetDeviceType = (e) => store.dispatch(setDeviceType(e))
  const dispatchSetScreenDimensions = (e) => store.dispatch(setScreenDimensions(e))
  const dispatchSetDisplayOrientation = (e) => store.dispatch(setDisplayOrientation(e))
  const dispatchSetIsFullScreen = (e) => store.dispatch(setIsFullscreen(e))
  const dispatchSetDisplay = (e) => store.dispatch(setDisplay(e))
  const dispatchSetColSize = (e) => store.dispatch(setColSize(e))
  const dispatchSetGridPa = (e) => store.dispatch(setGridPa(e))

  // RUN ONCE
  defineDeviceType(dispatchSetDeviceType)
  defineScreenDimensions(dispatchSetScreenDimensions)
  defineColSize(dispatchSetColSize)

  defineDisplayOrientation(dispatchSetDisplayOrientation)
  defineIsFullscreen(dispatchSetIsFullScreen)
  defineGridPa(dispatchSetGridPa)
  breakPointsMql.map(breakPoint => defineDisplay(breakPoint, dispatchSetDisplay))
  // subscribe to onChange event of breakpoints
  breakPointsMql.map(breakPoint => {
    breakPoint.onchange = () => {
      defineDisplay(breakPoint, dispatchSetDisplay)
      defineIsFullscreen(dispatchSetIsFullScreen)
      defineGridPa(dispatchSetGridPa)
    }
    return breakPoint
  })
  // subscribe to onChange event of orientation
  orientationMql.onchange = () => {
    defineDisplayOrientation(dispatchSetDisplayOrientation)
  }
}