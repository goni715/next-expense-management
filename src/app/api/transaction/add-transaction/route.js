import axios from "axios";
import {NextResponse} from "next/server";
import {cookies} from "next/headers";


export const POST = async (req, res) => {
    try{
        const token = cookies().get('token')?.value || '';

        const PostBody =  await req.json()
        const result = await axios.post(`${process.env.API_BASE_URL}/transaction/add-transaction`,PostBody, {headers:{token:token}});
        return NextResponse.json({message: "success", data:"Transaction create Success"},{status:result?.status});
    }
    catch(error){
        const errorRes = error?.response;
        return NextResponse.json(errorRes.data,{status:errorRes?.status});
    }
}