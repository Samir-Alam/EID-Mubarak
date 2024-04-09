"use client"; 

import Image from "next/image";
import kitty from "../public/kitty//pwssss.gif"
import eidMubarak from '../public/eid-mubarak.gif'
import { useState } from "react";

export default function Home() {

  const [count, setCount] = useState(0);
  const [buttonWidth, setButtonWidth] = useState(100);
  const [buttonHeight, setButtonHeight] = useState(50)

  const handleClick = () => {
    setCount(count+1);

    console.log(count);
    
  }
  
  return (
    <div className="flex items-center flex-col max-h-full bg-yellow-500">
      <div className="font-bold font-sans text-center top-10 mt-16"><Image className="size-48 bg-transparent" src={eidMubarak} alt="cute kitty"/></div>
      <Image className="size-48 bg-transparent" src={kitty} alt="cute kitty"/>
      <div className="btns flex gap-4">
        <button className="bg-green-600 py-2 px-4 rounded-lg" >YES</button>
        <button className="bg-red-600 h-24 w-12 rounded-lg" onClick={handleClick} style={{ width: `${buttonWidth}px`, height: `${buttonHeight}px` }}>NO</button>
      </div>
    </div>
  );
}
