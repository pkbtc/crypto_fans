"use client";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "./abi.json";
import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { CiShare1 } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const getCreator = async (address) => {
  let res = await fetch(
    `/api/creators/${address}`,
    {
      headers: {
        Accept: "application/json",
      },
    },
  );
  res = await res.json();
  return res.creator;

  // For testing purpose, returning a mock object
};

export default function Creator({ params }) {
  const [creator, setCreator] = useState(null);
  const [signature, setSignature] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [isMember, setIsMember] = useState(undefined);
  const message = "welcome to the site";
  useEffect(() => {
    const init = async () => {
      const creator = await getCreator(params.address);
      setCreator(creator);
    };
    init();
  }, []);
  const connect = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner(); setSigner(signer); const sign = await signer.signMessage(message); setSignature(sign); const contractAddress = "0x5D17cA9BeC1ae2271aD57148A405CaC729c1e78b";
        setCAddress(contractAddress);
        const contract = new ethers.Contract(contractAddress, abi, signer);
        console.log(contract);

        const res = await contract.members(creator.address, signer.address);
        console.log(creator.address);
        console.log(signer.address);
        setIsMember(res);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please install Metamask");
    }
  };
  const join = async () => {
    try {
      setFeedBack("transaction in progress......");
      const contract = new ethers.Contract(cAddress, abi, signer);
      const tx = await contract.join(creator.address, {
        value: ethers.parseEther("0.0001"),
      });
      const recipt = await tx.wait();
      setFeedBack(
        "Payment completed,refresh the page to see to see the content",
      );
    } catch (error) {
      setFeedBack("Payment failed,refresh the page to try again");
      console.log(error);
    }
  };

  return (
    <>
      {creator
        ? (
          <div className="w-screen">
            <div className="flex flex-col px-40">
              <div>
                <div className="w-full h-[400px]">
                  <Image
                    style={{
                      overflow: "hidden",
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    src="/test.jpeg"
                    height={1080}
                    width={1920}
                  />
                </div>
                <div className="flex relative">
                  <div className="flex-grow relative bottom-[4rem] left-5">
                    <Avatar className="size-44 border border-b-white">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <CiStar />
                  <CiShare1 />
                </div>
              </div>
              <div className="mt-[-3rem]">
                <h1 className="font-bold text-2xl">{creator.name}</h1>
                <p className="font-semibold text-gray-400 text-md">
                  {creator.address} <span>Last seen 24hrs ago</span>
                </p>
              </div>
              <main>
                <p>{creator.description}</p>
              </main>
              <div>
                <h1>Subscription</h1>
                <p>Subscribe to my onlyfans to get access to my post.</p>
                <Button asChild>
                  <Link href="/subscribe/{creator.address}">Subscribe</Link>
                </Button>
              </div>
            </div>
          </div>
        )
        : null}
      {signature
        ? (
          null
        )
        : <button onClick={connect}>Connect</button>}
      {signature && !isMember
        ? (
          <div>
            <h2>become paid member and get exclusive content</h2>
            <p>with single payment you will get lifetime access</p>
            <button
              type="submit"
              className="btn btn-primary mt-4"
              onClick={join}
            >
              Join
            </button>
          </div>
        )
        : null}
      {feedback
        ? <div className="alert alert-primary mt-4">{feedback}</div>
        : null}
    </>
  );
}
