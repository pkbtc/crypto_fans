import { CiImageOn } from "react-icons/ci";
import { BiPoll } from "react-icons/bi";
import { GoQuestion } from "react-icons/go";

export default function NewPost(){
  return(
    <div className="w-full p-4 border-t border-b border-gray-300">
      <p className="text-sm text-gray-400 mb-10">Compose a New Post</p>
      <div className="flex text-2xl gap-2">
        <CiImageOn/>
        <BiPoll/>
        <GoQuestion/>
      </div>
    </div>
  )
}
