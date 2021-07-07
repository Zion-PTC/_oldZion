// store function for Redux toolkit

import { configureStore } from "@reduxjs/toolkit";
import ethereumReducer from "../features/ethereum/ethereumSlice";
import userDeviceReducer from "../features/userDevice/userDeviceSlice";
import responsiveDesingReducer from "../features/responsiveDesign/responsiveDesingSlice";
import navBarMenuReducer from '../features/navBarMenu/navBarMenuSlice';
import leftBarReducer from '../features/leftBar/leftBarSlice';
import productAreaReducer from '../features/productArea/productAreaSlice';
import audioPlayerReducer from '../features/audioPlayer/audioPlayerSlice';
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query';
// API's
import { audiusApi } from "../services/audius";
// async Thunks
import { asyncThunksSlice } from "../features/asyncThunks/asyncThunksSlice";


export const store = configureStore({
  reducer: {
    ethereum: ethereumReducer,
    userDevice: userDeviceReducer,
    responsiveDesign: responsiveDesingReducer,
    navBarMenu: navBarMenuReducer,
    leftBar: leftBarReducer,
    productArea: productAreaReducer,
    audioPlayer: audioPlayerReducer,
    // Add the generated reducer as a specific top-level slice
    audiusApi: audiusApi.reducer,
    thunks: asyncThunksSlice.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(audiusApi.middleware),
})
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
// ASYNC THUNKS CALLS

