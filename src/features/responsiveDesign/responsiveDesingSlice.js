import { createSlice } from "@reduxjs/toolkit";
import { store } from '../../app/store';
import $ from "jquery";
import { setColSize, setGridPa, setGridPALarge, setGridPAMid, setGridPASmall } from "../productArea/productAreaSlice";

var breakPoint1 = '56em'
var breakPoint2 = '84em'

var smBreakPoint = '(max-width: ' + breakPoint1 + ')'
var mdInBreakPoint = '(min-width: ' + breakPoint1 + ')'
var mdOutBreakPoint = '(max-width: ' + breakPoint2 + ')'
var lgBreakPoint = '(min-width: ' + breakPoint2 + ')'
var orientation = "(orientation: portrait)"
let screenOrientation = window.matchMedia(orientation)

const small = window.matchMedia(smBreakPoint)
const midIn = window.matchMedia(mdInBreakPoint)
const midOut = window.matchMedia(mdOutBreakPoint)
const large = window.matchMedia(lgBreakPoint)
const breakPoints = [small, midIn, midOut, large]

const width = window.screen.width

function setScreenWidth() {
  store.dispatch(setScreenMaxWidth(width))
}

function setOrientation() {
  if (screenOrientation.matches) {
    store.dispatch(setDisplayOrientation('Portrait'))
  } else { store.dispatch(setDisplayOrientation('Landscape')) }
}

function detectFullscreen() {
  if (width / window.innerWidth === 1) {
    store.dispatch(setIsFullscreen(true))
  } else { store.dispatch(setIsFullscreen(false)) }
}

function handle(e) {
  let media = e.media
  let match = e.matches
  
  switch (media) {
    case smBreakPoint:
      set(match, 'Small', setDisReducer)
      break;
    case mdInBreakPoint:
      set(match, 'Medium', setDisReducer)
      break;
    case mdOutBreakPoint:
      set(match, 'Medium', setDisReducer)
      break;
    case lgBreakPoint:
      set(match, 'Large', setDisReducer)
      break;
    default:
      break;
  }

  function set(e, display, callback) {
    if (e) {
      callback(display, setColumnSize)
    }
  }

  function setDisReducer(display, callback) {
    let size = store.getState().responsiveDesign.screenMaxWidth
    let fullscreenmode = store.getState().responsiveDesign.isFullscreen
    store.dispatch(setDisplay(display))  
    callback(size, fullscreenmode, display)
  }
}

breakPoints.map(breakPoint => {
  breakPoint.onchange = (e) => {
    handle(e)
  }
})

window.addEventListener('load', () => {

  handle(small)
  handle(midIn)
  handle(large)

  setScreenWidth()
  setOrientation()
  detectFullscreen()

  let size = store.getState().responsiveDesign.screenMaxWidth
  let fullscreenmode = store.getState().responsiveDesign.isFullscreen
  let display = store.getState().responsiveDesign.display
  setColumnSize(size, fullscreenmode, display)
});

function setColumnSize(size, fullscreenmode, display) {

  switch (fullscreenmode) {
    case false:
      calcColSize(size / 3, setColumnSizes)
      break;
    case true:
      switch (size >= 1440) {
        case true:
          calcColSize(size / 3, setColumnSizes)
          break;
        case false:
          calcColSize(size, setColumnSizes)
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }

  function calcColSize(size, callback) {
    let colSize
    colSize = (size * (94 / 100) / 2) / 16
    callback(colSize, display)
  }

  function setColumnSizes(colSize, display) {
    if (display === 'Small') { store.dispatch(setGridPa(`repeat(2, ${colSize}em)`)) }
    if (display === 'Medium') { store.dispatch(setGridPa(`repeat(4, ${colSize}em)`)) }
    if (display === 'Large') { store.dispatch(setGridPa(`repeat(6, ${colSize}em)`)) }
    store.dispatch(setColSize(colSize))
  }
}

screenOrientation.onchange = () => {
  setOrientation()
  detectFullscreen()
  let size = window.innerWidth
  let fullscreenmode = store.getState().responsiveDesign.isFullscreen
  let display = store.getState().responsiveDesign.display
  console.log(size);
  setColumnSize(size, fullscreenmode, display)
}

var resizeId;
$(window).resize(function () {
  clearTimeout(resizeId);
  resizeId = setTimeout(doneResizing, 500);
});

function doneResizing() {
  console.log('done');
  detectFullscreen()
  handle(small)
  handle(midIn)
  handle(large)
}

export const responsiveDesignSlice = createSlice({
  name: 'responsiveDesign',
  initialState: {
    display: undefined,
    orientation: undefined,
    screenMaxWidth: undefined,
    isFullscreen: false,
  },
  reducers: {
    setDisplay: (state, action) => {
      state.display = action.payload
    },
    setDisplayOrientation: (state, action) => {
      state.orientation = action.payload
    },
    setScreenMaxWidth: (state, action) => {
      state.screenMaxWidth = action.payload
    },
    setIsFullscreen: (state, action) => {
      state.isFullscreen = action.payload
    }
  }
})

export const selectResponsiveDesign = state => state.responsiveDesign
export const {
  setDisplay,
  setDisplayOrientation,
  setScreenMaxWidth,
  setIsFullscreen
} = responsiveDesignSlice.actions
export default responsiveDesignSlice.reducer