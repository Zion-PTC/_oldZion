import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getHost = createAsyncThunk(
  'host/getHost',
  async () => {
    console.log('clicked asyncthunk');
    const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]
    let res = await fetch('https://api.audius.co')
    let json = await res.json()
    let data = await json.data
    let host = sample(data)
    return host
  }
)

export const connectToMetamask = createAsyncThunk(
  'host/connectToMetamask',
  async () => {
    const eth = window.ethereum
    await eth.request({ method: 'eth_requestAccounts' })
  }
)

export const getTokenBalance = createAsyncThunk(
  'host/getTokenBalance',
  async () => {

  }
)

export const getTrackUrl = createAsyncThunk(
  'host/getTrackUrl',
  async (url) => {
    await fetch(url)
  }
)

export const awaitSome = createAsyncThunk(
  'host/awaitSome',
  async (some) => {
    let promise = await some
    let awaitedData = promise.data
    return awaitedData
  }
)

export const asyncThunksSlice = createSlice({
  name: 'thunks',
  initialState: {
    host: '0000',
    metamaskMessage : '0000',
    userMainNetTokenBalance: '0000',
    userInvitationTokenBalance: '0000',
    awaitResult: null
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(getHost.fulfilled, (state, action) => {
      console.log('called getHost');
      state.host = action.payload
    })
    .addCase(connectToMetamask, (state, action) => {
      return action.payload
    })
    .addCase(awaitSome.fulfilled, (state, action) => {
      state.awaitResult = action.payload
    })
  }
})
