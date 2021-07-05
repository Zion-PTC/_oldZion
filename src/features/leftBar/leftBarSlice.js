import { createSlice } from "@reduxjs/toolkit";

export const leftBarSlice = createSlice({
  name: 'leftBar',
  initialState: {
    isHidden: true,
  },
  reducers: {
    setLeftBarHidden: state => {
      state.isHidden = !state.isHidden
    }
  }
})

export const selectLeftBar = state => state.leftBar
export const { setLeftBarHidden } = leftBarSlice.actions
export default leftBarSlice.reducer