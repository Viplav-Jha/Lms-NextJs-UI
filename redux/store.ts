'use client'
import { configureStore } from "@reduxjs/toolkit"
import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware"
// import {}


export const store = configureStore({
    reducer:{

    },
    devTools:false,
    middleware:(getDefaultMiddleware) =>getDefaultMiddleware().concat()
})