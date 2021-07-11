import { createSlice } from "@reduxjs/toolkit";

export const responsiveDesignSlice = createSlice({
  name: 'responsiveDesign',
  initialState: {
    orientation: undefined,
    isFullscreen: false,
    display: undefined,
  },
  reducers: {
    setDisplay: (state, action) => {
      state.display = action.payload
    },
    setDisplayOrientation: (state, action) => {
      state.orientation = action.payload
    },
    setIsFullscreen: (state, action) => {
      state.isFullscreen = action.payload
    }
  }
})

export const selectResponsiveDesign = state => state.responsiveDesign
export const {
  setDisplay,
  setDisplayOrientation,
  setIsFullscreen
} = responsiveDesignSlice.actions
export default responsiveDesignSlice.reducer