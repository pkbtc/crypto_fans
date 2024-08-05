import Feed from "@/components/ui/Feed";
const fs = require("fs");
const getCreatos=()=>{
 const creators= fs.readFileSync('./src/app/creators.json','utf-8');
 return JSON.parse(creators);
}

export default function LatestFeeds() {
  let creators=getCreatos();  
  creators=Object.values(creators);
  return (
    <div className="max-w-[1080px] flex flex-col items-center">
      {
        creators.map((creator) => (
      <Feed key={creator.address} link={`/creators/${creator.address}`} avatar={creator.profilePic} username={creator.address} fullName={creator.name} paragraph={creator.description} image={`/images/${creator.bannerPic}`} />
        ))
      }
    </div>
  );
}
