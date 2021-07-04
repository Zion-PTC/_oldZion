import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getHost = createAsyncThunk(
  'host/getHost',
  async () => {
    const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]
    return fetch('https://api.audius.co')
      .then(r => r.json())
      .then(j => j.data)
      .then(d => sample(d))
  }
)

export const hostSlice = createSlice({
  name: 'host',
  initialState: null,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getHost.fulfilled, (state, action) => {
      return action.payload
    })
  }
})
