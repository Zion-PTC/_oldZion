import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const handleActiveMenu = createAsyncThunk(
  'navBarThunks/handleActiveMenu',
  async ({menu, menus} ) => {
    let filtereMenus = menus.filter(e => e != menu)
    let selectedMenu = document.getElementById(menu)
    selectedMenu.setAttribute('class', 'active')
    console.log(menu, menus, filtereMenus);
    filtereMenus.forEach(element => {
      let domElement = document.getElementById(element)
      domElement.removeAttribute('class')
    });
    return menu;
  }
)

const initialState = {
  isHandleActiveMenuLoading: false
}

export const navBarThunksSlice = createSlice({
  name: 'navBarThunks',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(handleActiveMenu.fulfilled, (state,action) => {
        state.isHandleActiveMenuLoading = false
      })
      .addCase(handleActiveMenu.rejected, (state,action) => {
        state.isHandleActiveMenuLoading = false
      })
      .addCase(handleActiveMenu.pending, (state,action) => {
        state.isHandleActiveMenuLoading = true
        action.payload = 'pending'
      })
  }
})