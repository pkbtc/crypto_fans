const fs=require('fs');
const getCreatos=()=>{
 const creators= fs.readFileSync('./src/app/creators.json','utf-8');
 return JSON.parse(creators);
}
export default function Home() {
  let creators=getCreatos();  
  creators=Object.values(creators);
  return (
    <>
      <h1>welcome</h1>
      <p>Content</p>
      {
        creators.map((creator) => (
          <div key={creator.address}>
            <h1>{creator.address}</h1>
            <h1>{creator.name}</h1>
            <a href={`/creators/${creator.address}`}>Link</a>
          </div>
        ))
      }
    </>
  );
}
