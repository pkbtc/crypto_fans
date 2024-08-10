import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Feed(
  { link, avatar, fullName, paragraph, image },
) {
  return (
    <div className="p-4">
      <div className="flex">
        <Link className="flex" href={link}>
          <Avatar className="size-16">
            <AvatarImage src={`/images/${avatar}`} alt="@logo" />
            <AvatarFallback>BF</AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <h1>{fullName}</h1>
          </div>
          <div>5 hours ago</div>
        </Link>
      </div>
      <div className="px-4 pt-4">
        <p>{paragraph}</p>
        <Image src={image} alt="test" height={1080} width={1920} />
      </div>
    </div>
  );
}
