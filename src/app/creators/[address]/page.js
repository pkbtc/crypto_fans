
"use client"
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "./abi.json";
const getCreator = async (address) => {
    let res = await fetch(
        `/api/creators/${address}`,
        {
            headers: {
                Accept: 'application/json'
            }
        }
    );
    res = await res.json();
    return res.creator;

    // For testing purpose, returning a mock object
  
}

export default function Creator({ params }) {
    const [creator, setCreator] = useState(null);
    const [signature,setSignature]=useState(null);
    const [signer,setSigner]=useState(null);
    const [contract,setContract]=useState(null);
    const [isMember,setIsMember]=useState(undefined);
    const message='welcome to the site';
    useEffect(() => {
        const init = async () => {
            const creator = await getCreator(params.address);
            setCreator(creator);
        }
        init();
    }, []);
    const connect=async()=>{
        if(window.ethereum){
            const provider=new ethers.BrowserProvider(window.ethereum);
            const signer=await provider.getSigner();
            setSigner(signer);
         const sign=await   signer.signMessage(message);
         setSignature(sign);    
         const contractAddress="0x5FbDB2315678afecb367f032d93F642f64180aa3";
         const contract =new ethers.Contract(contractAddress,abi,signer);
         setContract(contract);
         const res=await contract
         
            }
        else{
            alert("Please install Metamask");
        }
    }

    return (
        <>
            <h1>Welcome</h1>
            <p>Content</p>
            {
                creator ? (
                    <ul className='list-group'>
                        <li className='list-group-item'>Address: {creator.address}</li>
                        <li className='list-group-item'>Name: {creator.name}</li>
                        <li className='list-group-item'>Description: {creator.description}</li>
                    </ul>
                ) : null
            }
            {
                signature ? (
                    null
                ): (
                    <button onClick={connect}>Connect</button>
                )
            }
        </>
    )
}
