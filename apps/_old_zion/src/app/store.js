// store function for Redux toolkit

import { configureStore } from "@reduxjs/toolkit";
import ethereumReducer from "../features/ethereum/ethereumSlice";
import balancesReducer from "../features/ethereum/balancesSlice";
import userDeviceReducer from "../features/userDevice/userDeviceSlice";
import responsiveDesingReducer from "../features/responsiveDesign/responsiveDesingSlice";
import navBarMenuReducer from '../features/navBarMenu/navBarMenuSlice';
import containerReducer from "../features/container/containerSlice";
import menuReducer from "../features/menu/menuSlice";
import leftBarReducer from '../features/leftBar/leftBarSlice';
import productAreaReducer from '../features/productArea/productAreaSlice';
import audioPlayerReducer from '../features/audioPlayer/audioPlayerSlice';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query';
// API's
import { audiusApi } from "../services/audius";
// async Thunks
import { asyncThunksSlice } from "../features/asyncThunks/asyncThunksSlice";
import { ethereumThunksSlice } from "../features/ethereum/ethereumThunksSlice"; 
import { menuThunksSlice } from "../features/menu/menuThunksSlice";
// import { ethereumMiddleware } from "./middlewares/ethereumMiddleware";
import { zionLoggerMiddleware } from "./middlewares/zionLoggerMiddleware";
import { ethereumMiddleware } from "../features/ethereum/ethereumThunksSlice";
import { navBarThunksSlice } from "../features/navBarMenu/navBarThunksSlice";

export const store = configureStore({
  reducer: {
    ethereum: ethereumReducer,
    balances: balancesReducer,
    userDevice: userDeviceReducer,
    responsiveDesign: responsiveDesingReducer,
    navBarMenu: navBarMenuReducer,
    container: containerReducer,
    menu: menuReducer,
    leftBar: leftBarReducer,
    productArea: productAreaReducer,
    audioPlayer: audioPlayerReducer,
    // Add the generated reducer as a specific top-level slice
    audiusApi: audiusApi.reducer,
    thunks: asyncThunksSlice.reducer,
    ethereumThunks: ethereumThunksSlice.reducer,
    navBarThunks: navBarThunksSlice.reducer,
    menuThunks: menuThunksSlice.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      audiusApi.middleware,
      zionLoggerMiddleware,
      ethereumMiddleware
    ),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
// ASYNC THUNKS CALLS

