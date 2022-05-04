import { createSlice } from "@reduxjs/toolkit"

export const userWeb3AccountObj = {
  id: null,
  isEth: null,
  isConnected: null,
  userAddr: null,
  userChain: null,
  web3Balance: null,
}

export const ethereumSlice = createSlice({
  name: 'ethereum',
  initialState: userWeb3AccountObj,
  reducers: {
    setIsEth: (state, action) => {
      state.isEth = action.payload
    },
    setIsConnected: (state, action) => {
      state.isConnected = action.payload
    },
    setUserAddr: (state, action) => {
      state.userAddr = action.payload
    },
    setUserChain: (state, action) => {
      state.userChain = action.payload
    },
  }
})

export const selectEthereum = state => state.ethereum
export const {
  setIsEth,
  setIsConnected,
  setUserAddr,
  setUserChain
} = ethereumSlice.actions
export default ethereumSlice.reducer