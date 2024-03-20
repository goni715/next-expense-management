import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast, SuccessToast} from "@/helper/ValidationHelper";



export const transactionApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTransactions: builder.query({
            query: ({frequency, fromDate, toDate, type}) => `/transaction/get-all-transaction/?frequency=${frequency}&fromDate=${fromDate}&toDate=${toDate}&type=${type}`,
            providesTags: ["Transactions"],
            keepUnusedDataFor: 600,
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                }catch(err) {
                    ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        }),
        getTransactionsReport: builder.query({
            query: () => `/transaction/get-transactions-report`,
            providesTags: ["TransactionsReport"],
            keepUnusedDataFor: 600,
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                }catch(err) {
                    ErrorToast("Something Went Wrong!");
                    //do nothing
                    console.log(err);
                }
            },
        }),
        addTransaction: builder.mutation({
            query: (data) => ({
                url: "/transaction/add-transaction",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Transactions", "TransactionsReport"],
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast("Transaction Create Success");
                    }
                }catch(err) {
                    console.log(err)
                }
            }
        }),
        updateTransaction: builder.mutation({
            query: ({id,data}) => ({
                url: `/transaction/update-transaction?id=${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["Transactions", "TransactionsReport"],
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast("Update Success");
                    }
                }catch(err) {
                    console.log(err)
                }
            }
        }),
        deleteTransaction: builder.mutation({
            query: (id) => ({
                url: `/transaction/delete-transaction?id=${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Transactions", "TransactionsReport"],
            async onQueryStarted(arg, {queryFulfilled}){
                try{
                    const res = await queryFulfilled;
                    if(res?.data?.message === "success"){
                        SuccessToast("Delete Success");
                    }
                }catch(err) {
                    console.log(err);
                    let status = err?.error?.status;
                }
            }
        }),
    }),
})


export const {useGetTransactionsQuery, useGetTransactionsReportQuery, useAddTransactionMutation, useUpdateTransactionMutation, useDeleteTransactionMutation} = transactionApi;