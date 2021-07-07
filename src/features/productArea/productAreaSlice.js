import { createSlice } from "@reduxjs/toolkit";
import { store } from '../../app/store';

var breakPoint1 = '56em'
var breakPoint2 = '84em'

var smBreakPoint = '(max-width: ' + breakPoint1 + ')'
var mdInBreakPoint = '(min-width: ' + breakPoint1 + ')'
var mdOutBreakPoint = '(max-width: ' + breakPoint2 + ')'
var lgBreakPoint = '(min-width: ' + breakPoint2 + ')'

window.addEventListener('load', () => {
  const small = window.matchMedia(smBreakPoint)
  const midIn = window.matchMedia(mdInBreakPoint)
  const midOut = window.matchMedia(mdOutBreakPoint)
  const large = window.matchMedia(lgBreakPoint)

  function setSm(e) {
    if(e) {store.dispatch(setGridPASmall())}
  }
  function setMdIn(e) {
    if(e) {store.dispatch(setGridPAMid())}
  }
  function setMdOut(e) {
    if(e) {store.dispatch(setGridPAMid())}
  }
  function setLg(e) {
    if(e) {store.dispatch(setGridPALarge())}
  }

  function handle(e) {
    let match = e.matches
    let media = e.media

    switch (media) {
      case smBreakPoint:
        setSm(match)
        break;
      case mdInBreakPoint:
        setMdIn(match)
        break;
      case mdOutBreakPoint:
        setMdOut(match)
        break;
      case lgBreakPoint:
        setLg(match)
        break;
      default:
        break;
    }
  }

  handle(small)
  handle(midIn)
  handle(large)

  small.onchange = (e) => {
    handle(e)
  }
  midIn.onchange = (e) => {
    handle(e)
  }
  midOut.onchange = (e) => {
    handle(e)
  }
  large.onchange = (e) => {
    handle(e)
  }
});

let screenWidth = window.screen.width

function setGridDimension() {
  let columnSize = (screenWidth * 80 / 100)
  return columnSize
}

const colSize = setGridDimension()

export const productAreaSlice = createSlice({
  name: 'productArea',
  initialState: {
    gridPA: undefined,
    columnSize: colSize
  },
  reducers: {
    setGridPASmall: state => {
      state.gridPA = 'repeat(2, 14em)'
    },
    setGridPAMid: state => {
      state.gridPA = 'repeat(4, 14em)'
    },
    setGridPALarge: state => {
      state.gridPA = 'repeat(6, 14em)'
    }
  }
})

export const selectProductArea = state => state.productArea
export const { setGridPASmall, setGridPAMid, setGridPALarge } = productAreaSlice.actions
export default productAreaSlice.reducer