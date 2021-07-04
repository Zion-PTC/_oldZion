import { createSlice } from "@reduxjs/toolkit";
import { store } from '../../app/store';

// var mobile = 768;
// var tablet = 1280;
// var desktop = 1440;
/**
 * Easily check if a breakpoint is active via JavaScript
 *
 * @param {string} breakpoint
 * @returns {boolean}
 */
// var isBreakpointActive = function (breakpoint) {
//     var isActive = false;
//     switch (breakpoint) {
//         case 'mobile':
//             isActive = (window.innerWidth <= mobile);
//             break;
//         case 'tablet':
//             isActive = (window.innerWidth > mobile && window.innerWidth <= tablet);
//             break;
//         case 'desktop':
//             isActive = (window.innerWidth > tablet);
//             break;
//     }
//     return isActive;
// };
// console.log(isBreakpointActive());

window.addEventListener('load', () => {
  let x = document.getElementById('#menubar')
  console.log(x);
  const mql1 = window.matchMedia('(min-width: 880px)')
  const mql2 = window.matchMedia('(min-width: 1251px)')
  function handleTabletChange2(e) {
    if (e.matches) {
      console.log('Media Query Matched! 1251')
      store.dispatch(setGridPALarge())
    }
    if (!e.matches) {
      store.dispatch(setGridPAMid())
    }
  }
  function handleTabletChange1(e) {
    console.log(e);
    if (e.matches) {
      console.log('Media Query Matched! 880px')
      store.dispatch(setGridPAMid())
    }
    if (!e.matches) {
      store.dispatch(setGridPASmall())
      
    }
  }
  mql1.addEventListener('change', (e) => {
    handleTabletChange1(e)
    
  })
  mql2.addEventListener('change', (e) => {
    handleTabletChange2(e)
  })
  handleTabletChange1(mql1)
  handleTabletChange2(mql1)

});



export const productAreaResponsiveSlice = createSlice({
  name: 'productAreaResponsive',
  initialState: {
    gridPA: undefined
  },
  reducers: {
    setGridPASmall: state => {
      state.gridPA = '1fr 1fr'
    },
    setGridPAMid: state => {
      state.gridPA = '1fr 1fr 1fr 1fr'
    },
    setGridPALarge: state => {
      state.gridPA = '1fr 1fr 1fr 1fr 1fr 1fr'
    }
  }
})

export const selectProductAreaResponsive = state => state.productAreaResponsive
export const { setGridPASmall, setGridPAMid, setGridPALarge } = productAreaResponsiveSlice.actions
export default productAreaResponsiveSlice.reducer