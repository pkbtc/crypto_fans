import LatestFeeds from "@/components/LatestFeeds";
import HomeBox from "@/components/HomeBox";
import ComposeNewPost from "@/components/ComposeNewPost";
import Auth from "@/components/Auth"
export default function Home() {
  return (
    <>
      <HomeBox />
      <ComposeNewPost />
      <LatestFeeds />
      <Auth/>
    </>
  );
}
