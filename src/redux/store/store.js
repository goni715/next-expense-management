import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from "@/redux/features/counter/counterSlice";
import apiSlice from "@/redux/features/api/apiSlice";
import authSliceReducer from "@/redux/features/auth/authSlice";
import {settingsSliceReducer} from "@/redux/features/settings/settingsSlice";
import modalSliceReducer from "@/redux/features/modal/modalSlice";
import transactionSliceReducer from "@/redux/features/transaction/transactionSlice";


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath] : apiSlice.reducer,
        counter: counterSliceReducer,
        auth:authSliceReducer,
        settings:settingsSliceReducer,
        modal: modalSliceReducer,
        transaction: transactionSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware), // Use default middleware
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools extension in development
})

export default store;