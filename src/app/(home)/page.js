import LatestFeeds from "@/components/LatestFeeds";
import HomeBox from "@/components/HomeBox";
import ComposeNewPost from "@/components/ComposeNewPost";
import Auth from "@/components/Auht"
import { auth, currentUser } from "@clerk/nextjs/server";
export default async function Home() {
  const { userId } = auth();
  console.log(userId);
  const user = await currentUser()
  console.log(user);
  return (
    <>
      <HomeBox />
      <ComposeNewPost />
      <LatestFeeds />
      <Auth/>
    </>
  );
}
