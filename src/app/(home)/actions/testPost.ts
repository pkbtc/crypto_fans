"use server"
import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
export async function testDb(formData: FormData){
    const user =await currentUser();
    console.log(user.emailAddresses[0].emailAddress);
    const final=await prisma.user.findUnique({
        where:{
            email:user.emailAddresses[0].emailAddress
        }
    });
    await prisma.post.create({
        data:{
            title:formData.get('title') as string,
            description:formData.get('description') as string,
            public:true,
            userId:final.id

        }
    });

}