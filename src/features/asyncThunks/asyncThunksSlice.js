import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getHost = createAsyncThunk(
  'host/getHost',
  async () => {
    console.log('clicked asyncthunk');
    const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]
    return fetch('https://api.audius.co')
      .then(r => r.json())
      .then(j => j.data)
      .then(d => sample(d))
  }
)

export const connectToMetamask = createAsyncThunk(
  'host/connectToMetamask',
  async () => {
    const eth = window.ethereum
    await eth.request({ method: 'eth_requestAccounts' })
      // .then(res => setMetaConnectionMessage('Congratulation motherfucker', res))
      // .catch(err => setMetaConnectionMessage('You rejected the connection, try again', err))
  }
)

export const getTokenBalance = createAsyncThunk(
  'host/getTokenBalance',
  async () => {

  }
)

export const asyncThunksSlice = createSlice({
  name: 'thunks',
  initialState: {
    host: '0000',
    metamaskMessage : '0000',
    userMainNetTokenBalance: '0000',
    userInvitationTokenBalance: '0000',
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(getHost.fulfilled, (state, action) => {
      state.host = action.payload
    })
    .addCase(connectToMetamask, (state, action) => {
      return action.payload
    })
  }
})
