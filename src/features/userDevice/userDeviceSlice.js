import { createSlice } from "@reduxjs/toolkit";

var width = window.screen.width

export const userDeviceSlice = createSlice({
  name: "userDevice",
  initialState: {
    webBrowser: 'ciao',
    screenMaxWidth: width
  },
  reducers: {
    setWebBrowser: state => {

    }
  }
})

export const selectUserDevice = state => state.userDevice
export const {setWebBrowser} = userDeviceSlice.actions
export default userDeviceSlice.reducer