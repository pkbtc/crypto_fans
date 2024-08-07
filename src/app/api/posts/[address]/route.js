const fs=require('fs');
import { headers } from 'next/headers';
import { ethers } from 'ethers';
import abi from "../../../abi.json";

export async function GET(_,{params}){
    const message = "welcome to the site";
    let posts=fs.readFileSync('./src/app/posts.json','utf-8');
    posts=JSON.parse(posts);
    posts=  posts.data.filter(post=>post.author===params.address);
    const headersList=headers();
    const user=headersList.get("OF_CRYPTO_ADDRESS");
    const signature=headersList.get("OF_CRYPTO_SIG");
    const recoverredAddress=ethers.verifyMessage(message,signature);

    const provider=new ethers.JsonRpcProvider(`https://sepolia.infura.io/v3/7497b1bcddef4b58910d0a12256b3d75`);
    const contractAddress="0x5D17cA9BeC1ae2271aD57148A405CaC729c1e78b";
    const contract=new ethers.Contract(contractAddress,abi,provider);
    const isMember=await contract.members(params.address,user);
    console.log(isMember);
    console.log(user);
    console.log(recoverredAddress)
    if(recoverredAddress==user && isMember){
        return Response.json(
            {data:posts},
            {status:200}
        )
    }
    else{
        return Response.json(
            {data:[]},
            {status:200}
        )
    }
}