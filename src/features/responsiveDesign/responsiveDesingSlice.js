import { createSlice } from "@reduxjs/toolkit";
import { store } from '../../app/store';

var breakPoint1 = '880px'
var breakPoint2 = '1251px'

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
    if(e) {store.dispatch(setDisplaySm())}
  }
  function setMdIn(e) {
    if(e) {store.dispatch(setDisplayMd())}
  }
  function setMdOut(e) {
    if(e) {store.dispatch(setDisplayMd())}
  }
  function setLg(e) {
    if(e) {store.dispatch(setDisplayLg())}
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

let sm = 'small'
let md = 'medium'
let lg = 'large'


export const responsiveDesignSlice = createSlice({
  name: 'responsiveDesign',
  initialState: {
    display: undefined
  },
  reducers: {
    setDisplaySm: state => {
      state.display = sm
    },
    setDisplayMd: state => {
      state.display = md
    },
    setDisplayLg: state => {
      state.display = lg
    }
  }
})

export const selectResponsiveDesign = state => state.responsiveDesign
export const { setDisplaySm, setDisplayMd, setDisplayLg } = responsiveDesignSlice.actions
export default responsiveDesignSlice.reducer