import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import $ from 'jquery'

export let defineMenuH = createAsyncThunk(
  'menu/defineMenuH',
  async () => {
    $(defineH)
    function defineH() {
      let menuBar = $('#menu')
      let menuBarH = menuBar.outerHeight()
      console.log(menuBarH);
      return menuBarH
    }
  }
)

const initialState = {
  isDefineHLoadin: false
}

export const menuThunksSlice = createSlice({
  name: 'menuThunks',
  initialState: initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
    .addCase(defineMenuH.fulfilled, (state, action) => {
      state.isDefineHLoadin = false
    })
    .addCase(defineMenuH.rejected, (state, action) => {
      state.isDefineHLoadin = false
    })
    .addCase(defineMenuH.pending, (state, action) => {
      state.isDefineHLoadin = true
      action.payload = 'pending'
    })
  }
})