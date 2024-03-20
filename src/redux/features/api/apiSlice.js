import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ErrorToast} from "@/helper/ValidationHelper";
import {Logout} from "@/helper/logout";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    // baseUrl: "http://localhost:5000/api",
    // prepareHeaders: async (headers, {getState, endpoint}) =>{
    //     if(getToken()){
    //         headers.set("token", getToken());
    //     }
    //     return headers;
    // }
});


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: async (args, api, extraOptions) => {
        let result = await baseQuery(args, api, extraOptions);
        if (result?.error?.status === 401) {
            ErrorToast("Token Expired");
           await Logout();
        }
        return result;
    },
    tagTypes: ["Transactions", "TransactionsReport"], //TagS WhiteLists
    endpoints: (builder) => ({}),
})

export default apiSlice;

