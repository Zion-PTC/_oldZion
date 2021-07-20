import { createSlice } from "@reduxjs/toolkit"
import database from '../../Database/Accounts.json'

const accounts = database.accounts
const nOfMenus = accounts[0].menus[0].subMenus.length
const subMenus = accounts[0].menus[0].subMenus
const subSubMenus = accounts[0].menus[0].subMenus[0].subMenus
console.log(subSubMenus);
// const navBarColor = accounts[0].navbarColor

let menus
menus = subMenus.map(i => menus = i.name)

export const navBarMenuSlice = createSlice({
  name : 'navBarMenu',
  initialState: {
    hidden : true,
    menuBarH : null,
    activeMenu: subMenus[0].name,
    activeSubMenu: subSubMenus[0],
    isMenuActive: true,
    nOfMenus : nOfMenus,
    menus: menus,
    gridTemplateColumns: `repeat(${nOfMenus}, 1fr)`
  },
  reducers : {
    setNavBarMenu : state => {
      state.hidden = !state.hidden
    },
    setMenuBarH : (state, action) => {
      state.menuBarH = action.payload
    },
    setActiveMenu : (state, action) => {
      state.activeMenu = action.payload
    },
    setActiveSubMenu : (state, action) => {
      state.activeSubMenu = action.payload
    }
  }
})

export const selectNavBarMenu = state => state.navBarMenu
export const {
  setNavBarMenu,
  setMenuBarH,
  setActiveMenu,
  setActiveSubMenu
} = navBarMenuSlice.actions
export default navBarMenuSlice.reducer

