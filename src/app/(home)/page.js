import LatestFeeds from "@/components/LatestFeeds";
import HomeBox from "@/components/HomeBox";
import ComposeNewPost from "@/components/ComposeNewPost";
import Auth from "@/components/Auht"
import { createUser } from "./actions/createUser";
export default async function Home() {
  // const { userId } = auth();
  // console.log("userId:",userId);
  // const user = await currentUser()
  // console.log("User Data:",user);
  // console.log("url:",user.imageUrl);
  // console.log(user.emailAddresses[0].emailAddress);
  await createUser();
  return (
    <>
      <HomeBox />
      <ComposeNewPost />
      <LatestFeeds />
      <Auth/>
    </>
  );
}
