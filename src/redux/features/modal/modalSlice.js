import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    transactionCreateModalOpen: false,
    transactionDeleteModalOpen: false,
    transactionEditModalOpen: false,
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        SetTransactionCreateModalOpen:(state,action)=>{
            state.transactionCreateModalOpen=action.payload
        },
        SetTransactionDeleteModalOpen:(state,action)=>{
            state.transactionDeleteModalOpen=action.payload
        },
        SetTransactionEditModalOpen:(state,action)=>{
            state.transactionEditModalOpen=action.payload
        }
    }

})


export const {SetTransactionCreateModalOpen, SetTransactionDeleteModalOpen, SetTransactionEditModalOpen} = modalSlice.actions;

const modalSliceReducer = modalSlice.reducer;
export default modalSliceReducer;