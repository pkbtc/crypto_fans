import Link from "next/link"
import { FaHome } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";

export default function Navbar({className}){
  return(
    <nav className={`h-full ${className}`}>
      <ul className="flex flex-col gap-8 text-3xl ">
        <li className="hover:text-black text-gray-400"><Link href="#"><FaHome className="inline"/> Home</Link></li>
        <li className="hover:text-black text-gray-400"><Link href="#"><IoNotifications className="inline"/>Notifications</Link></li>
        <li className="hover:text-black text-gray-400"><Link href="#"><AiOutlineMessage className="inline"/>Messages</Link></li>
        <li className="hover:text-black text-gray-400"><Link href="#"><CgProfile className="inline"/>My Profile</Link></li>
        <li className="hover:text-black text-gray-400"><Link href="#"><CiCircleMore className="inline"/>More</Link></li>
      </ul>
    </nav>
  )
}
