import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function NavBar({ className }) {
  return (
    <div className="flex justify-end fixed">
      <div className={`flex flex-col ${className}`}>
        <Avatar className="mb-4">
          <AvatarImage src="/pfp1.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <nav className="h-full flex-grow">
          <ul className="flex flex-col gap-8 text-2xl">
            <li className="hover:text-black text-gray-400">
              <Link href="/">
                <FaHome className="inline" /> Home
              </Link>
            </li>
            <li className="hover:text-black text-gray-400">
              <Link href="#">
                <IoNotifications className="inline" /> Notifications
              </Link>
            </li>
            <li className="hover:text-black text-gray-400">
              <Link href="#">
                <AiOutlineMessage className="inline" /> Messages
              </Link>
            </li>
            <li className="hover:text-black text-gray-400">
              <Link href="#">
                <CgProfile className="inline" /> My Profile
              </Link>
            </li>
            <li className="hover:text-black text-gray-400">
              <Link href="#">
                <CiCircleMore className="inline" /> More
              </Link>
            </li>
          </ul>
        </nav>
        <Button asChild>
          <Link className="rounded-full mt-8" href="/posts/create">
            New Post
          </Link>
        </Button>
      </div>
    </div>
  );
}
