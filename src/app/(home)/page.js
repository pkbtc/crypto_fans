import LatestFeeds from "@/components/LatestFeeds";
import HomeBox from "@/components/HomeBox";
import ComposeNewPost from "@/components/ComposeNewPost";
import Auth from "@/components/Auth";
import { createUser } from "./actions/createUser";
import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
export default async function Home() {

  const user=await currentUser();
  
  let test=false;
  if(user){
    
  }
  const acc=await prisma.user.findUnique({
    where:{
      email:user.emailAddresses[0].emailAddress
    }
  });
  if(acc){
    test=true;
  }
  
  
  
  if(!test){
    await createUser();
  }
  
  return (
    <>
      <HomeBox />
      <ComposeNewPost />
      <LatestFeeds />
      {
        test ?(
          <div>you are loggged on</div>
        ):(
          <Auth/>
        )
      }
     
      
    </>
  );
}
