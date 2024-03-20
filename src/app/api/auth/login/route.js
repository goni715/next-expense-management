import axios from "axios";
import {NextResponse} from "next/server";
import {cookies} from "next/headers";

export const POST = async (req, res) => {

    try{
        const PostBody =  await req.json()
        const result = await axios.post(`${process.env.API_BASE_URL}/auth/login`,PostBody);

        if(result.status===200){
            let token = result.data['token'];
            const oneDay = 24 * 60 * 60 * 1000
            //cookies().set('token', token, { expires: Date.now() - oneDay })
            cookies().set('token', token, {
                path: '/', // Cookie path (defaults to current path)
                maxAge: 36000, // Cookie expiration time in seconds (1 hour)
                httpOnly: true, // Flag to prevent client-side JavaScript access
                //secure: process.env.NODE_ENV === 'production', // Flag for HTTPS-only in production
            });
        }

        return NextResponse.json(result.data,{status:result?.status});
    }
    catch(error){
        const errorRes = error?.response;
        return NextResponse.json(errorRes.data,{status:errorRes?.status});
    }
}