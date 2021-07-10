import { createSlice } from "@reduxjs/toolkit";

export const productAreaSlice = createSlice({
  name: 'productArea',
  initialState: {
    gridPA: undefined,
    colSize: undefined
  },
  reducers: {
    setGridPASmall: state => {
      state.gridPA = 'repeat(2, 14em)'
    },
    setGridPAMid: state => {
      state.gridPA = 'repeat(4, 14em)'
    },
    setGridPALarge: state => {
      state.gridPA = 'repeat(6, 14em)'
    },
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
  setGridPASmall,
  setGridPAMid,
  setGridPALarge,
  setGridPa,
  setColSize
} = productAreaSlice.actions
export default productAreaSlice.reducer