import { createSlice } from "@reduxjs/toolkit"
import $ from 'jquery'

export const navBarMenuSlice = createSlice({
  name : 'navBarMenu',
  initialState: {
    hidden : true,
    menuBarH : undefined
  },
  reducers : {
    setNavBarMenu : state => {
      state.hidden = !state.hidden
      console.log('redux click');
    },
    setMenuBarH : state => {
      state.menuBarH = $('#menubar').outerHeight()
    }
  }
})

export const selectNavBarMenu = state => state.navBarMenu
export const { setNavBarMenu, setMenuBarH } = navBarMenuSlice.actions
export default navBarMenuSlice.reducer

