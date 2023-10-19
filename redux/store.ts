'use client'
import { configureStore } from "@reduxjs/toolkit"
import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware"
import { apiSlice } from "./features/api/apiSlice"
import authSlice from "./features/auth/authSlice"



export const store = configureStore({
    reducer:{
      [apiSlice.reducerPath]:apiSlice.reducer,
      auth:authSlice
    },
    devTools:false,
    middleware:(getDefaultMiddleware) =>getDefaultMiddleware().concat(apiSlice.middleware)
})