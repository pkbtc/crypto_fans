import Feed from "@/components/ui/Feed";
const fs=require('fs');
const getCreatos=()=>{
 const creators= fs.readFileSync('./src/app/creators.json','utf-8');
 return JSON.parse(creators);
}

export default function LatestFeeds() {
  let creators=getCreatos();  
  creators=Object.values(creators);
  return (
    <div className="flex flex-col items-center">
      {
        creators.map((creator) => (
      <Feed key={creator.address} link={`/creators/${creator.address}`} avatar="logo.jpeg" username={creator.name} fullName={creator.name} paragraph="nice bath" image="/test.jpeg" />
        ))
      }
    </div>
  );
}
