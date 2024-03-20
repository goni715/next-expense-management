import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    transactionId:"",
    transaction:{
        amount:0,
        type:"",
        category:"",
        date:"",
        reference:"",
        description:""
    }
}

const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {
        SetTransactionId:(state,action)=>{
            state.transactionId=action.payload
        },
        SetTransaction:(state, action)=>{
            state.transaction=action.payload
        },
        SetEditTransaction:(state, action)=>{
            const {property, value} = action.payload;
            state.transaction[property]=value
        }
    }

})


export const {SetTransactionId, SetTransaction, SetEditTransaction} = transactionSlice.actions;

const transactionSliceReducer = transactionSlice.reducer;
export default transactionSliceReducer;