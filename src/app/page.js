import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LatestFeeds from "@/components/ui/LatestFeeds";
import CardSuggest from "@/components/ui/CardSuggest"

export default function Home() {
  return (
    <div className="flex">
      <div className="flex flex-col items-end">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span>Home</span>
          <span>Notification</span>
          <span>Messages</span>
          <span>Collections</span>
          <span>Subscription</span>
          <span>Add Card</span>
          <span>My Profile</span>
          <span>More</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
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
        <CardSuggest/>
      </div>
    </div>
  );
}
