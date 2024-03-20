import axios from "axios";
import {NextResponse} from "next/server";
import {cookies} from "next/headers";


export const GET = async (req, res) => {
    try{
        const token = cookies().get('token')?.value || '';
        let {searchParams} = new URL(req.url);
        let frequency = searchParams.get('frequency');
        let fromDate = searchParams.get('fromDate');
        let toDate = searchParams.get('toDate');
        let type = searchParams.get('type');

        const result = await axios.get(`${process.env.API_BASE_URL}/transaction/get-all-transaction/${frequency}/${fromDate}/${toDate}/${type}`, {headers:{token:token}});
        return NextResponse.json(result.data,{status:result?.status});
    }
    catch(error){
        const errorRes = error?.response;
        return NextResponse.json(errorRes.data,{status:errorRes?.status});
    }
}