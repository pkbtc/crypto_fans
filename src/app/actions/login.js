"use server"
import prisma from "@/lib/db"
export async function loginUser(email){
    const user = await prisma.sign.findMany();
     console.log(user);
}