import axios from "axios";
import {NextResponse} from "next/server";


export const POST = async (req, res) => {
    try{
        const PostBody =  await req.json()
        const result = await axios.post(`${process.env.API_BASE_URL}/auth/register`,PostBody);
        return NextResponse.json({message: "success", data:"Register Success"},{status:result?.status});
    }
    catch(error){
        const errorRes = error?.response;
        return NextResponse.json(errorRes.data,{status:errorRes?.status});
    }
}