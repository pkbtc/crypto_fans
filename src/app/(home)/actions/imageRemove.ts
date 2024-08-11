"use server"
import {utapi} from "@/app/server/uploadthing";
export async function imageRemove(imageKey){
    try {
        await utapi.deleteFiles(imageKey);
        return {
            sucess:true,
        }
    } catch (error) {
        return {
            sucess:false,
        }
    }
}