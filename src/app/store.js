// store function for Redux toolkit

import { configureStore } from "@reduxjs/toolkit";
import ethereumReducer from '../features/ethereum/ethereumSlice'
import navBarMenuReducer from '../features/navBarMenu/navBarMenuSlice'
import productAreaResponsiveReducer from '../features/productAreaResponsive/productAreaResponsiveSlice'

export default configureStore({
  reducer : {
    ethereum : ethereumReducer,
    navBarMenu : navBarMenuReducer,
    productAreaResponsive : productAreaResponsiveReducer
  }
})