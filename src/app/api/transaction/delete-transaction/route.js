import axios from "axios";
import {NextResponse} from "next/server";
import {cookies} from "next/headers";


export const DELETE = async (req, res) => {
    try{
        const token = cookies().get('token')?.value || '';
        let {searchParams} = new URL(req.url);
        let id = searchParams.get('id');


        const result = await axios.delete(`${process.env.API_BASE_URL}/transaction/delete-transaction/${id}`, {headers:{token:token}});
        return NextResponse.json(result.data,{status:result?.status});
    }
    catch(error){
        const errorRes = error?.response;
        return NextResponse.json(errorRes.data,{status:errorRes?.status});
    }
}