import { createSlice } from "@reduxjs/toolkit"
import $ from 'jquery'
import database from '../../Database/Accounts.json'

const accounts = database.accounts
const nOfMenus = accounts[0].menus[0].subMenus.length
const subMenus = accounts[0].menus[0].subMenus
// const navBarColor = accounts[0].navbarColor

let menus
menus = subMenus.map(i => menus = i.name)

export const navBarMenuSlice = createSlice({
  name : 'navBarMenu',
  initialState: {
    hidden : true,
    menuBarH : undefined,
    activeMenu: subMenus[0].name,
    isMenuActive: true,
    nOfMenus : nOfMenus,
    menus: menus,
    gridTemplateColumns: `repeat(${nOfMenus}, 1fr)`
  },
  reducers : {
    setNavBarMenu : state => {
      state.hidden = !state.hidden
    },
    setMenuBarH : state => {
      state.menuBarH = $('#menubar').outerHeight()
    },
    setActiveMenu : (state, action) => {
      state.activeMenu = action.payload
    }
  }
})

export const selectNavBarMenu = state => state.navBarMenu
export const { setNavBarMenu, setMenuBarH, setActiveMenu } = navBarMenuSlice.actions
export default navBarMenuSlice.reducer

