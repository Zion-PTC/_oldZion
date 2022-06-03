import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  top: null,
}

const containerSlice = createSlice({
  name: 'container',
  initialState: initialState,
  reducers: {
    setTop: (state, action) => {
      state.top = action.payload
    }
  }
})

export const selectContainer = state => state.containerSlice
export const {
  setTop
} = containerSlice.actions
export default containerSlice.reducer