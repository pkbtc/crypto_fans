
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
    const [feedback,setFeedBack]=useState('');
    const [cAddress,setCAddress]=useState(null);
    
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
            try {
                const provider=new ethers.BrowserProvider(window.ethereum);
            const signer=await provider.getSigner();
            setSigner(signer);
         const sign=await   signer.signMessage(message);
         setSignature(sign);    
         const contractAddress="0x5D17cA9BeC1ae2271aD57148A405CaC729c1e78b";
        setCAddress(contractAddress);
         const contract =new ethers.Contract(contractAddress,abi,signer);
         console.log(contract);
         
         const res=await contract.members(creator.address,signer.address);
        console.log(creator.address);
        console.log(signer.address);
         setIsMember(res);
         console.log(res);
         
            } catch (error) {
                console.log(error);
            }
            }
        else{
            alert("Please install Metamask");
        }
    }
    const join=async()=>{
        try {
            setFeedBack("transaction in progress......");
            const contract =new ethers.Contract(cAddress,abi,signer);
           const tx=await contract.join(creator.address,{value:ethers.parseEther('0.0001')});
           const recipt=await tx.wait();
            setFeedBack("Payment completed,refresh the page to see to see the content")

        } catch (error) {
            setFeedBack("Payment failed,refresh the page to try again");
            console.log(error);
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
           {
            signature && !isMember ? (
                <div>
                    <h2>become paid member and get exclusive content</h2>
                    <p>with single payment you will get lifetime access</p>
                    <button type="submit" className="btn btn-primary mt-4" onClick={join}>Join</button>
                </div>
            ):null
           }
           {
            feedback ? (
                <div className="alert alert-primary mt-4">{feedback}</div>
            ):null
           }
        </>
    )
}
