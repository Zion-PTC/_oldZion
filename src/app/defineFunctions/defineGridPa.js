import { store } from "../store";
import { responsiveObject } from "./responsiveDesignDashboard";

export default function defineGridPa(callback) {

  var breakPoints = responsiveObject.breakPoints
  // Media Query Lists
  const small = {
    name: 'Small',
    mql: window.matchMedia(breakPoints[0])
  }
  const midIn = {
    name: 'Medium',
    mql: window.matchMedia(breakPoints[1])
  }
  const large = {
    name: 'Large',
    mql: window.matchMedia(breakPoints[3])
  }

  let columnSize = store.getState().productArea.colSize
  let display = store.getState().responsiveDesign.display
  console.log(display);

  if (display === small.name) { callback(`repeat(2, ${columnSize}em)`) }
  if (display === midIn.name) { callback(`repeat(4, ${columnSize}em)`) }
  if (display === large.name) { callback(`repeat(6, ${columnSize}em)`) }
}