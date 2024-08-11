"use server"

import prisma from "@/lib/db"
import { auth, currentUser } from "@clerk/nextjs/server";

export async function createUser(){
    const { userId } = auth();
    const user=await currentUser();
    const address="0xabcd";
    const name =  user.firstName+" "+user.lastName;
    const url=user.imageUrl;
    const bannner="";
    await prisma.user.create({
        data:{
            
            address:address,
            name:name,
            profilePic:url,
            bannerPic:bannner
        }
    })

}