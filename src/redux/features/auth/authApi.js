import {apiSlice} from "../api/apiSlice.js";
import {SetForgotError, SetLoginError, SetNewPasswordError, SetRegisterError, SetVerifyOtpError} from "./authSlice.js";
import {SuccessToast} from "@/helper/ValidationHelper";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registration: builder.mutation({
            query: (data) => ({
                url: "/auth/register",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;

                    if(res?.data?.message === "success"){
                        SuccessToast("Register Success");
                    }

                }catch(err) {
                    let status = err?.error?.status;
                    let result = err?.error?.data?.data;
                    if(status === 409){
                        dispatch(SetRegisterError(result));
                    }else{
                        dispatch(SetRegisterError(result));
                        // console.log(err)
                    }
                }
            }
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    // console.log(res)
                    // console.log(res?.meta?.response?.status);
                    if(res?.data?.message === "success"){
                        SuccessToast("Login Success");
                        setTimeout(()=>{
                            window.location.href="/";
                        },200)
                    }
                }catch(err) {
                    const status = err?.error?.status;
                    if(status === 404){
                        dispatch(SetLoginError("Could not Find this Email!"));
                    }else if(status === 400){
                        dispatch(SetLoginError("Wrong Password!"));
                    }else if(status === 403){
                        dispatch(SetLoginError("Your Account is Banned"));
                    }
                    else{
                        // dispatch(SetLoginError("Something Went Wrong!"));
                        // console.log(err)
                    }
                }
            }
        }),
    }),
})


export const {useRegistrationMutation, useLoginMutation} = authApi;