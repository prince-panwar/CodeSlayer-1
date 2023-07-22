import { NextResponse } from "next/server";

export async function GET(){
    const userData={
        id:1,
        Name: "Anmol",
        email:"anmolgaur07@gmail.com",
    };
    return NextResponse.json({data:userData},{status: 200});
}
