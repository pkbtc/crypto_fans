
import { auth, currentUser } from "@clerk/nextjs/server";




export async function newPost(){
    const user =await currentUser();
    console.log(user.emailAddresses[0].emailAddress);
}