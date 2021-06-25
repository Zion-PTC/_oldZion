import { createSlice } from "@reduxjs/toolkit";

export const productAreaResponsiveSlice = createSlice({
  name: 'productAreaResponsive',
  initialState: {
    gridPA : undefined
  },
  reducers: {
    setGridPASmall: state => {
      state.gridPA = '1fr 1fr'
    },
    setGridPAMid: state => {
      state.gridPA = '1fr 1fr 1fr 1fr'
    }
  }
})

export const selectProductAreaResponsive = state => state.productAreaResponsive
export const  { setGridPASmall, setGridPAMid } = productAreaResponsiveSlice.actions
export default productAreaResponsiveSlice.reducer