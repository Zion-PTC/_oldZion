import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menus: [],
  subMenus: [],
  menuHeight: null,
}

const menuSlice = createSlice({
  name:'menu',
  initialState: initialState,
  reducers:{
    setMenus: (state, action) => {
      state.menus = action.payload
    },
    setSubMenus: (state, action) => {
      state.subMenus = action.payload
    },
    setMenuH: (state, action) => {
      state.menuHeight = action.payload
    }
  }
})

export const selectMenu = state => state.menus
export const {
  setMenus,
  setSubMenus,
  setMenuH
} = menuSlice.actions
export default menuSlice.reducer