import { createSlice } from "@reduxjs/toolkit";

export const userDeviceSlice = createSlice({
  name: "userDevice",
  initialState: {
    deviceType: null,
    webBrowser: null,
    screenDimensions: {
      width: null,
      heght: null
    }
  },
  reducers: {
    setDeviceType: (state, action) => {
      state.deviceType = action.payload
    },
    setScreenDimensions: (state, action) => {
      state.screenDimensions = action.payload
    },
    setWebBrowser: state => {

    },
  }
})

export const selectUserDevice = state => state.userDevice
export const {
  setDeviceType,
  setScreenDimensions,
  setWebBrowser
} = userDeviceSlice.actions
export default userDeviceSlice.reducer