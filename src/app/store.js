// store function for Redux toolkit

import { configureStore } from "@reduxjs/toolkit";
import navBarMenuReducer from '../features/navBarMenu/navBarMenuSlice'
import productAreaResponsiveReducer from '../features/productAreaResponsive/productAreaResponsiveSlice'
import audioPlayerReducer from '../features/audioPlayer/audioPlayerSlice'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'

import { audiusApi } from "../services/audius";

import { ethereumSlice } from "../features/ethereum/ethereumSlice";


export const store = configureStore({
  reducer: {
    navBarMenu: navBarMenuReducer,
    productAreaResponsive: productAreaResponsiveReducer,
    audioPlayer: audioPlayerReducer,
    // Add the generated reducer as a specific top-level slice
    audiusApi: audiusApi.reducer,
    ethereum: ethereumSlice.reducer
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

