import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LatestFeeds from "@/components/ui/LatestFeeds";
import CardSuggest from "@/components/ui/CardSuggest";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex w-screen px-10">
      <div className="flex flex-col w-1/3 p-8">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <NavBar className="flex-grow py-10" />
        <Button asChild>
          <Link className="rounded-3xl" href="/post">New Post</Link>
        </Button>
      </div>
      <div className="mx-10 flex flex-col items-center border-gray-300 border-l border-r">
        <div className="flex">
          <h1>Home</h1>
          <div>...</div>
        </div>
        <div>
          <h1>Compose a new Post</h1>
        </div>
        <div>
          <button>All</button>
        </div>
        <LatestFeeds />
      </div>
      <div>
        <input type="text" id="search" placeholder="Search Posts" />
        <CardSuggest />
      </div>
    </div>
  );
}
