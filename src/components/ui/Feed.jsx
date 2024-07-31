import Image from "next/image";
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Feed(
  { key, link, avatar, fullName, username, paragraph, image },
) {
  return (
    <div className="w-1/3 h-1/2 p-4">
      <div className="flex">
        <Link href={link}>
          <Avatar>
            <AvatarImage src="/logo.png" alt="@logo" />
            <AvatarFallback>BF</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex-grow">
          <h1>{fullName}</h1>
          <p>{key}</p>
        </div>
        <div>5 hours ago</div>
      </div>
      <div>
        <p>{paragraph}</p>
        <Image src={image} alt="test" height={1080} width={1920} />
      </div>
    </div>
  );
}
