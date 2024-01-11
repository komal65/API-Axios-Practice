"use client"
import axios from 'axios';
import React, { useState } from 'react'


const page = () => {
  const [Images, setImages] = useState([]);
  const getImages= async ()=>{
    console.log("Response leleo")
    try{
      const response =  await axios.get("https://picsum.photos/v2/list");
      const data= response.data;
      setImages(data);
      console.log(Images);
    }
    catch (error){
      console.error("Error Agaya Guyss");
    }
    
  };
  return (
    <>
    
    <div className='h-10  flex items-center justify-between px-5'>Welcome   Guys !!</div>
    <div>
    <button onClick  ={getImages} className=' px-5 py-3 bg-green-600 text-white font-bold flex align-middle'>
      Get Images</button>
    <div className='p-10'>
      {Images.map((elem,i)=>{
        return <img
        key={i}
        src={elem.download_url}
        width={300}
        height={300}
        className='m-10 rounded inline-block'

        />

        
      })}
    </div>
    </div>
    </>
   
  );
};

export default page




























// "use client"
// import React  , {useState} from 'react'
// import Header  from '@/Components/Header'

// const page = () => {
// const [clogo, setClogo] = useState("YouTube")
//   return (
//     <>
//     <Header  clogo={clogo}/>
    
//     </>
//   )
// }

// export default page