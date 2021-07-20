import { createSlice } from "@reduxjs/toolkit";

export const productAreaSlice = createSlice({
  name: 'productArea',
  initialState: {
    colSize: null,
    gridPA: null,
  },
  reducers: {
    setGridPa: (state, action) => {
      state.gridPA = action.payload
    },
    setColSize: (state, action) => {
      state.colSize = action.payload
    }
  }
})

export const selectProductArea = state => state.productArea
export const {
  setGridPa,
  setColSize
} = productAreaSlice.actions
export default productAreaSlice.reducer