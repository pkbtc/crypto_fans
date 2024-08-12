'use server'
import { auth, currentUser } from "@clerk/nextjs/server";

export async function createpost(){
    const user =await currentUser();
    console.log(user.emailAddresses[0].emailAddress);

}