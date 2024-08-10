"use client"
import { UploadButton ,UploadDropzone} from '@/utils/uploadthing';
import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import { imageRemove } from '@/app/actions/imageRemove';

const UplaodImage = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageKey, setImageKey] = useState<string | null>(null);
  const handleImage = async() => {
     const res= await imageRemove(imageKey);
     if(res.sucess){
      alert("image removed");
      setImageUrl('');
      setImageKey('');
     }
     
  }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files: ", res);
              setImageUrl(res[0].url);
              setImageKey(res[0].key);
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
          <div>
            <h1 className='text-3xl font-semibold text-gray-800'>Image Preview</h1>
            {
              imageUrl && (
                <div>
                  <Image src={imageUrl} alt='image uplaod' height={200} width={300} className='object-cover h-auto w-full'/>

                </div>
              )
            }
            <div>
              <button onClick={handleImage}>remove image</button>
            </div>
          </div>
        </main>
      );
}

export default UplaodImage
