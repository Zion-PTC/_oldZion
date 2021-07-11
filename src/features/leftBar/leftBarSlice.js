import { createSlice } from "@reduxjs/toolkit";

// il contenuto della lbar dipende dal balance
// dei token dello user

// i valori che vegono presi in considerazione sono
// 1 - Invitation Tokens
// 2 - DAO Shares on DAOHAUS
// 3 - DAO share tokens
// 4 - Any holding of any account which is connected to ZION

// un account su zion comprende
// le funzionalità di DAOHAUs piu alcune funzionalita che possono essere
// aggiunte 

export const leftBarSlice = createSlice({
  name: 'leftBar',
  initialState: {
    isHidden: true,
    lbarContent: undefined,
    lbarMenus: undefined,
  },
  reducers: {
    setLeftBarHidden: state => {
      state.isHidden = !state.isHidden
    }
  }
})

export const selectLeftBar = state => state.leftBar
export const { setLeftBarHidden } = leftBarSlice.actions
export default leftBarSlice.reducer