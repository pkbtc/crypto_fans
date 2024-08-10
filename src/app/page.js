import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LatestFeeds from "@/components/LatestFeeds";
import HomeBox from "@/components/HomeBox";
import ComposeNewPost from "@/components/ComposeNewPost";

export default function Home() {
  return (
    <>
      <HomeBox />
      <ComposeNewPost />
      <div>
        <LatestFeeds />
      </div>
    </>
  );
}
