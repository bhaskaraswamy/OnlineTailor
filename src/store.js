import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./redux/authSlice";
import productSlice from "./redux/productSlice";


const store = configureStore({
   reducer:{
       user:authSlice,
       product:productSlice
   },
})

export default store;

