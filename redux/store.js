import { configureStore } from "@reduxjs/toolkit";
 import coorReducer from "../slices/coorSlice"

export const store = configureStore({
    reducer:{
        coor:coorReducer,
    }
})






