// this is a slice for Redux Toolkit
// A "slice" is a collection of Redux
// reducer logic and actions for a single
// feature in your app

import { createSlice } from "@reduxjs/toolkit"

const eth = ''

const ethy = new Promise (( res ) => {
  const e = window.ethereum.selectedAddress
  if (e !== undefined) { res(e)}
})


console.log(ethy);

export const ethereumSlice = createSlice({
  name : 'ethereum',
  initialState: {
    eth : eth
  }
})

// export const { /* list of reducers here } */ } = ethereumSlice.actions

export default ethereumSlice.reducer

export const selectEthereum = state => state.ethereum.value