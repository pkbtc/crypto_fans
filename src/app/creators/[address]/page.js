"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "./abi.json";
import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { CiShare1 } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import NotFound from "@/components/smallComponents/NotFound";
import { Progress } from "@/components/ui/progress";

export function ProgressDemo() {
}

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
const getPrivatePosts = async (creator, user, signature) => {
  let res = await fetch(
    `/api/posts/${creator}`,
    {
      headers: {
        Accept: "application/json",
        OF_CRYPTO_SIG: signature,
        OF_CRYPTO_ADDRESS: user,
      },
    },
  );
  res = await res.json();
  return res.data;
};

export default function Creator({ params }) {
  const [creator, setCreator] = useState(null);
  const [signature, setSignature] = useState(null);
  const [signer, setSigner] = useState(null);
  const [feedback, setFeedBack] = useState("");
  const [cAddress, setCAddress] = useState(null);
  const [isMember, setIsMember] = useState(undefined);
  const [privatePosts, setPrivatePosts] = useState([]);
  const message = "welcome to the site";
  useEffect(() => {
    const init = async () => {
      const creator = await getCreator(params.address);
      setCreator(creator);
    };
    init();
  }, []);
  // useEffect(() => {

  //   if(signature && isMember){
  //     init();
  //   }

  // }, [signature,isMember]);
  const init = async () => {
    const privateP = await getPrivatePosts(
      creator.address,
      signer.address,
      signature,
    );
    const allPosts = privateP;
    setPrivatePosts(allPosts);
    console.log(privatePosts);
  };
  const connect = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        setSigner(signer);
        const sign = await signer.signMessage(message);
        setSignature(sign);
        const contractAddress = "0x5D17cA9BeC1ae2271aD57148A405CaC729c1e78b";
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

  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {creator
        ? (
          <div className="w-full">
            <div className="flex flex-col">
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
              </div>
              <div className="px-16">
                <div className="flex relative">
                  <div className="flex-grow relative bottom-[4rem]">
                    <Avatar className="size-44 border border-b-white">
                      <AvatarImage src="/pfp1.jpg" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex text-4xl m-4">
                    <Link href="#" className="mx-4">
                      <CiStar />
                    </Link>
                    <Link href="#">
                      <CiShare1 />
                    </Link>
                  </div>
                </div>
                <div className="mt-[-3rem]">
                  <h1 className="font-bold text-2xl">{creator.name}</h1>
                  <p className="font-semibold text-gray-400 text-md">
                    {creator.address}
                  </p>
                  <p className="font-semibold text-gray-400 text-sm">
                    Last seen 24hrs ago
                  </p>
                </div>
                <main className="mt-4 mb-4">
                  <p className="text-xl">{creator.description}</p>
                </main>
                <div className="border border-gray-400 w-full p-6">
                  <h1 className="font-semibold text-gray-800 text-xl mb-4">
                    Subscription
                  </h1>
                  {signature
                    ? (
                      null
                    )
                    : (
                      <Button
                        className="w-full text-xl rounded-2xl h-12"
                        onClick={connect}
                      >
                        Connect Wallet
                      </Button>
                    )}

                  {signature && !isMember
                    ? (
                      <div>
                        <h2>Become a paid member and get exclusive content</h2>
                        <p>with single payment you will get lifetime access</p>
                        <Button
                          className="w-full text-xl rounded-2xl h-12"
                          onClick={join}
                        >
                          Subscribe
                        </Button>
                      </div>
                    )
                    : null}
                  {feedback
                    ? <div className="alert alert-primary mt-4">{feedback}</div>
                    : null}
                  {isMember
                    ? (
                      <div>
                        <div>you are a member you can view my private show</div>
                        <button onClick={init}>Get Private Posts</button>
                      </div>
                    )
                    : null}
                  {privatePosts
                    ? (
                      <div>
                        {privatePosts.map((post) => {
                          <div>{post.content}</div>;
                        })}
                      </div>
                    )
                    : null}
                </div>
              </div>
            </div>
          </div>
        )
        : (
          <div className="h-screen w-full flex items-center justify-center">
            <Progress value={progress} className="w-[60%]" />
          </div>
        )}
    </>
  );
}
