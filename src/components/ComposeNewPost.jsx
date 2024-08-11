import Link from "next/link";
import UploadImage from "@/components/UploadImage"
import { CiImageOn } from "react-icons/ci";
import { BiPoll } from "react-icons/bi";
import { GoQuestion } from "react-icons/go";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function NewPost() {
  return (
    <div className="w-full border-t border-b border-gray-300">
      <Textarea
        placeholder="Compose a new Post"
        className="border-l border-r"
      />
      <div className="flex">
        <div className="flex-grow flex text-2xl gap-2">
          <Popover>
            <PopoverTrigger>
              <CiImageOn />
            </PopoverTrigger>
            <PopoverContent><UploadImage/></PopoverContent>
          </Popover>
          <Link href="#">
            <BiPoll />
          </Link>
          <Link href="#">
            <GoQuestion />
          </Link>
        </div>
        <div>
          <Button>
            New Post
          </Button>
        </div>
      </div>
    </div>
  );
}
