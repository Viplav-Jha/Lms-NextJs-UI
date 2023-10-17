'use client'
import { configureStore } from "@reduxjs/toolkit"
import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware"
import { apiSlice } from "./features/api/apiSlice"


export const store = configureStore({
    reducer:{
      [apiSlice.reducerPath]:apiSlice.reducer,
    },
    devTools:false,
    middleware:(getDefaultMiddleware) =>getDefaultMiddleware().concat(apiSlice.middleware)
})