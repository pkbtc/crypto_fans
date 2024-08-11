"use server"
import prisma from "@/lib/db";



export const createImageData=async(imageData)=>{
    try {
        await prisma.image.create({data:imageData});
    console.log(imageData);
    } catch (error) {
        console.log(error);
    }
}