"use server"
import prisma from "@/lib/db";


export async function createPost(formData: FormData){
    await prisma.post.create({
        data:{
            title:formData.get('title') as string,
            description:formData.get('description') as string,
            
        }
    })

}