import { NextResponse } from "next/server";
import {cookies} from "next/headers";


export async function GET() {
    try {

        cookies().delete('token');

       return NextResponse.json({message: "Logout successful", success: true}, {status:200})

    } catch (error) {
        return NextResponse.json({ message:"error", data:error.toString() }, { status: 500 });
    }

}
