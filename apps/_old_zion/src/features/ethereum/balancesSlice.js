import { createSlice } from "@reduxjs/toolkit";

export const balancesObj = {
  id: null,
  token: null,
  amount: null,
  userId: null,
}

export const balancesSlice = createSlice({
  name: "balances",
  initialState: balancesObj,
  reducers: {},
  extraReducers: (builder) => {

  }
})

export const {

} = balancesSlice.actions

export default balancesSlice.reducer