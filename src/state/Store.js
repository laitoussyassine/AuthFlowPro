import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../state/auth/authSlice.js'


const store = configureStore({
    reducer: authReducer
}) 

export default store;